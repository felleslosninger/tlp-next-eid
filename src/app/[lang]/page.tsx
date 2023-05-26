import React from 'react';

import { GetPage } from '@/services/PageService';
import type { ApiDataType, ParamsType } from '@/types/ApiData';
import { Layout } from '@/layout/Layout';

import { getDictionary } from '../../get-dictionary';

export default async function IndexPage({ params }: ParamsType) {
  const dictionary = await getDictionary(params.lang);
  const data: ApiDataType = await GetPage(params.lang, params.slug);

  return (
    <Layout dictionary={dictionary}>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </Layout>
  );
}
