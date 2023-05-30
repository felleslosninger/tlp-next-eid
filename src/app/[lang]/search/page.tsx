import React from 'react';

import type { ParamsType } from '@/types/ApiData';
import { Layout } from '@/layout/Layout';
import { validateAndGetLang } from '@/utils/validateAndGetLang';

export default async function IndexPage({ params }: ParamsType) {
  const lng: string = params.lang;

  const dictionary = await validateAndGetLang(lng);

  return (
    <Layout dictionary={dictionary}>
      <h1>Search</h1>
    </Layout>
  );
}
