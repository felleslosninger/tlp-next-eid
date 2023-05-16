import React from 'react';

import { GetPage } from '@/services/PageService';
import { statusHandler } from '@/utils/buildUrl';
import type { ApiDataType, ParamsType } from '@/types/ApiData';
import { redirect } from 'next/navigation';

export default async function Page(params: ParamsType) {
  const response: Response = await GetPage(params);
  //await statusHandler(response);
  const data: ApiDataType = await response.json();

  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
