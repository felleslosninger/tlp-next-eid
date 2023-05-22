import React from 'react';
import { notFound, redirect } from 'next/navigation';

//import { statusHandler } from '@/utils/buildUrl';
//import { GetPage } from '@/services/PageService';
import type { ApiDataType, ParamsType } from '@/types/ApiData';

const buildPath = (slugs: string[]) => {
  let currentSlug = '&path=';
  for (let i = 0; i < slugs.length; i++) {
    currentSlug += '/' + slugs[i];
  }
  console.log('Current slug', currentSlug);
  return currentSlug;
};

async function getData({ params }: ParamsType) {
  let apiUrl = `http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=${params.lang}`;

  if (params.slug !== undefined) {
    apiUrl += buildPath(params.slug);
  }
  const res = await fetch(apiUrl);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    if (res.status === 301 || res.status === 301) {
      const data = await res.json();
      const destination: any = data.content.redirect.destination;
      const nyStreng: string = destination.replace(/\/eid\/nb\//, '');
      redirect('/nb/' + nyStreng);
    }
    if (res.status === 404) {
      notFound();
    }
    //throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page(params: ParamsType) {
  const data = await getData(params);
  //const response: Response = await GetPage(params);
  /*const data = await statusHandler(response);
  const data: ApiDataType = await response.json();
  if (response.status === 301 || response.status === 301) {
    console.log(response.status);
    const destination: any = data.content.redirect.destination;
    const nyStreng: string = destination.replace(/\/eid\/nb\//, '');
    redirect('/nb/' + nyStreng);
  }
  if (response.status === 404) {
    notFound();
  }*/

  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
