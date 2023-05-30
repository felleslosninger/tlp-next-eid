import React from 'react';

import { GetPage } from '@/services/PageService';
import type { ApiDataType, ParamsType } from '@/types/ApiData';
import { Layout } from '@/layout/Layout';
import { validateAndGetLang } from '@/utils/validateAndGetLang';

export default async function IndexPage({ params }: ParamsType) {
  const lng: string = params.lang;
  const dictionary = await validateAndGetLang(lng);
  const data: ApiDataType = await GetPage(lng, params.slug);

  return (
    <Layout dictionary={dictionary}>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </Layout>
  );
}
