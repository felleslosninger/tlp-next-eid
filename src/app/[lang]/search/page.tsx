import React from 'react';

import type { ParamsType } from '@/types/ApiData';
import { Layout } from '@/layout/Layout';

import { getDictionary } from '../../../get-dictionary';

export default async function IndexPage({ params }: ParamsType) {
  const dictionary = await getDictionary(params.lang);

  return (
    <Layout dictionary={dictionary}>
      <h1>Search</h1>
    </Layout>
  );
}
