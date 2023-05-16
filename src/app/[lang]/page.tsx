//import { Layout } from '@/layout/Layout';
import React from 'react';
import Link from 'next/link';

import { GetPage } from '@/services/PageService';

export default async function Home({ params }) {
  //console.log(params);
  const data = await GetPage(params);
  return (
    <>
      <h1>{data.content.node.title}</h1>
      <ul>
        <li>
          <Link href='/nb/any'>Any</Link>
        </li>
        <li>
          <Link href='/nb/search'>Search</Link>
        </li>
      </ul>
      <p>{data.content.node.body}</p>
    </>
  );
}
