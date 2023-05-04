pipeline {
    agent any

    triggers {
        githubPush()
    }

    options {
        buildDiscarder logRotator(numToKeepStr: '10')
        skipDefaultCheckout()
        disableConcurrentBuilds()
        ansiColor('xterm')
        retry(0)
    }

    stages {
        stage('Condition to run job') {
            when {
                anyOf {
                    branch 'unstable'
                    branch 'rc'
                    triggeredBy cause: 'UserIdCause'
                }
            }

            stages {
                stage('Checkout') {
                    steps {
                        dir('packaging') {
                            git poll: false, changelog: false, branch: 'master', url: 'git@github.com:felleslosninger/tlp-packaging.git', credentialsId: 'tlp-github-build-user'
                        }

                        dir('next-eid') {
                            git poll: false, changelog: false, branch: "${env.BRANCH_NAME}", url: 'git@github.com:felleslosninger/tlp-next-eid.git', credentialsId: 'tlp-github-build-user'
                        }
                    }
                }

                stage('Build') {
                    steps {
                        dir('scripts') {
                            sh "pnpm install"
                            sh "pnpm build"
                        }                    
                    }                    
                    steps {
                        sh "packaging/bin/deb nextjs-site-eid"
                    }
                }

                stage('Deb') {
                    steps {
                        script {
                            switch(env.BRANCH_NAME) {
                                case "unstable" :
                                    env.DEB_DISTRO = "unstable";
                                    break
                                case "rc" :
                                    env.DEB_DISTRO = "rc";
                                    break
                                case "main" :
                                    env.DEB_DISTRO = "stable";
                                    break
                            }
                        }

                        sh "packaging/bin/updaterepo ${env.DEB_DISTRO}"
                    }
                }

                stage('Deploy unstable') {
                    when {
                        branch 'unstable'
                    }

                    steps {
                        sh "ssh maintainer@feat01-nextjs.dmz.local 'sudo apt-get update'"
                        sh 'ssh maintainer@feat01-nextjs.dmz.local "sudo apt-get -y install nextjs-site-eid"'
                    }
                }

                // stage('Deploy rc') {
                //     when {
                //         branch 'rc'
                //     }

                //     steps {
                //         sh "ssh maintainer@test-drupal8.dmz.local 'sudo apt-get update'"
                //         sh 'ssh maintainer@test-drupal8.dmz.local "sudo apt-get -y install drupal8-profile-${DRUPAL_PROFILE}"'
                //     }
                // }

                // stage('Deploy stable') {
                //     when {
                //         branch 'master'
                //     }

                //     parallel {
                //         stage('app01') {
                //             steps {
                //                 sh "ssh maintainer@drupal8-app01.dmz.local 'sudo apt-get update'"
                //                 sh 'ssh maintainer@drupal8-app01.dmz.local "sudo apt-get -y install drupal8-profile-${DRUPAL_PROFILE}"'
                //             }
                //         }

                //         stage('for') {
                //             steps {
                //                 sh "ssh maintainer@for-drupal8.dmz.local 'sudo apt-get update'"
                //                 sh 'ssh maintainer@for-drupal8.dmz.local "sudo apt-get -y install drupal8-profile-${DRUPAL_PROFILE}"'
                //             }
                //         }
                //     }
                // }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '*.deb', fingerprint: true, allowEmptyArchive: true
            cleanWs()
        }
    }
}
