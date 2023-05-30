import React from 'react';

import { getPageData, handleResponse } from '@/services/PageService';
import type { ParamsType, langType, slugType } from '@/types/ApiData';
import type { pageResponse } from '@/services/PageService';
import { Layout } from '@/layout/Layout';
import { validateAndGetLang } from '@/utils/validateAndGetLang';

export default async function IndexPage({ params }: ParamsType) {
  const lang: langType = params.lang;
  const slug: slugType = params.slug;
  const dictionary = await validateAndGetLang(lang);
  const { response, jsonData }: pageResponse = await getPageData(lang, slug);
  handleResponse(response, jsonData, lang);

  return (
    <Layout dictionary={dictionary}>
      <h1>{jsonData.content.node.title}</h1>
      <p>{jsonData.content.node.body}</p>
    </Layout>
  );
}
