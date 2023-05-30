const { execSync } = require('child_process');

function getTlpReactPack() {
  const packageFilename = process.argv[2];

  if (!packageFilename) {
    console.error('No package filename provided.');
    return;
  }

  try {
    execSync(`pnpm add ../tlp-react/packages/react/${packageFilename}`);
    console.log('get-tlp-react-pack script executed successfully.');
  } catch (error) {
    console.error(
      'An error occurred while executing get-tlp-react-pack script:',
      error.message,
    );
  }
}

getTlpReactPack();
