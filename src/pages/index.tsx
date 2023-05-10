import Head from 'next/head';
import React from 'react';

import '@altinn/figma-design-tokens/dist/tokens.css';
import { Layout } from './Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next Appd</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Layout />
    </>
  );
}
