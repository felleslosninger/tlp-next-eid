import React from 'react';

import { getPageData, handleResponse } from '@/services/PageService';
import type { PageParamsType, langType, slugType } from '@/types/ApiData';
import type { pageResponse } from '@/services/PageService';
import { TemplateWrapper } from '@/templateWrapper/TemplateWrapper';
import { validateAndGetLang } from '@/utils/validateAndGetLang';

export default async function IndexPage({ params }: PageParamsType) {
  const lang: langType = params.lang;
  const slug: slugType = params.slug;
  const dictionary = await validateAndGetLang(lang);
  const { response, jsonData }: pageResponse = await getPageData(lang, slug);
  handleResponse(response, jsonData, lang);

  return (
    <TemplateWrapper
      dictionary={dictionary}
      data={jsonData}
    >
      <h1>{jsonData.content.node.title}</h1>
      <p>{jsonData.content.node.body}</p>
    </TemplateWrapper>
  );
}
