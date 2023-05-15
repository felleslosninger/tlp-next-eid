import { Layout } from '@/layout/Layout';
import React from 'react';
import { GetPage } from '@/services/PageService';

import 'normalize.css';
import '@altinn/figma-design-tokens/dist/tokens.css';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import '@digdir/tlp-react/dist/tokens.css';

async function getData() {
  const data = await GetPage();
  console.log(data);
  return data;
}

export default async function Home() {
  let data = await getData();
  return (
    <>
      <h1>{data.content.node.title}</h1>
    </>
  );
}
