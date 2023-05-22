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

  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
  }

  return res.json();
}

export default async function Page(params: ParamsType) {
  const data = await getData(params);
  console.log('Testtttt', data.content.redirect.status);
  if (data.content.redirect.status === '301') {
    console.log('Redirect');
    const destination: any = data.content.redirect.destination;
    const nyStreng: string = destination.replace(/\/eid\/nb\//, '');
    console.log(nyStreng);
    redirect('/nb/' + nyStreng);
  }

  return (
    <>
      <h1>{data.content.node.title}</h1>
      <p>{data.content.node.body}</p>
    </>
  );
}
