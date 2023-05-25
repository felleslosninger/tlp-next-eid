import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { GetPage } from '@/services/PageService';
import type { ApiDataType, ParamsType } from '@/types/ApiData';

import { Layout } from '@/layout/Layout';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export default async function Page(params: ParamsType) {
  const { t, lang } = useTranslation('common');
  const data: ApiDataType = await GetPage(params);

  return (
    <>
      <Layout>
        <h1>{data.content.node.title}</h1>
        <p>{data.content.node.body}</p>
        <h1>{t`tomat`}</h1>
      </Layout>
    </>
  );
}
