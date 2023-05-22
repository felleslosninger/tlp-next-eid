import React from 'react';

import { GetPage } from '@/services/PageService';
import { statusHandler } from '@/utils/buildUrl';
import type { ApiDataType, ParamsType } from '@/types/ApiData';

async function getData({ params }: ParamsType) {
  let apiUrl = `http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=${params.lang}`;

  const res = await fetch(apiUrl);

  return res.json();
}

export default async function Page(params: ParamsType) {
  /*const response: Response = await GetPage(params);
  const data = await statusHandler(response);
  const data: ApiDataType = await response.json();*/
  const data = await getData(params);

  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
