import React from 'react';
import { notFound, redirect } from 'next/navigation';

//import { statusHandler } from '@/utils/buildUrl';
import { GetPage } from '@/services/PageService';
import type { ApiDataType, ParamsType } from '@/types/ApiData';

export default async function Page(params: ParamsType) {
  const response: Response = await GetPage(params);
  //const data = await statusHandler(response);
  const data: ApiDataType = await response.json();
  if (response.status === 301 || response.status === 301) {
    console.log(response.status);
    const destination: any = data.content.redirect.destination;
    const nyStreng: string = destination.replace(/\/eid\/nb\//, '');
    redirect('/nb/' + nyStreng);
  }
  if (response.status === 404) {
    notFound();
  }

  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
