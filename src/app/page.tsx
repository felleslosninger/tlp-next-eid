import React from 'react';

import { GetPage } from '@/services/PageService';
import type { ApiDataType, ParamsType } from '@/types/ApiData';

export default async function Page(params: ParamsType) {
  const data: ApiDataType = await GetPage(params);

  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
