//import { Layout } from '@/layout/Layout';
import React from 'react';

import { GetPage } from '@/services/PageService';

export default async function Home({ params }) {
  console.log(params);
  const data = await GetPage(params);
  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
