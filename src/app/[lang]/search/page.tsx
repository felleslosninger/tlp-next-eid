import React from 'react';

import type { ParamsType } from '@/types/ApiData';
import { TemplateWrapper } from '@/templateWrapper/TemplateWrapper';
import { validateAndGetLang } from '@/utils/validateAndGetLang';

export default async function IndexPage({ params }: ParamsType) {
  const lng: string = params.lang;

  const dictionary = await validateAndGetLang(lng);

  return (
    <TemplateWrapper dictionary={dictionary}>
      <h1>søk</h1>
    </TemplateWrapper>
  );
}
