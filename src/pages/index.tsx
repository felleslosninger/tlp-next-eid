import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import { Button } from '@digdir/design-system-react'
import '@altinn/figma-design-tokens/dist/tokens.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

      <h2>Next.js app</h2>
      <h3>Her er ein knapp frå designsystemet</h3>
      <div><Button size='medium'>Click here</Button></div>

      </main>
    </>
  )
}