import { notFound, redirect } from 'next/navigation';

import type { ParamsType } from '@/types/ApiData';
import { buildPath } from '@/utils/buildUrl';

const GetPage = async ({ params }: ParamsType) => {
  let apiUrl = `http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=${params.lang}`;

  if (params.slug !== undefined) {
    apiUrl += buildPath(params.slug);
  }
  const response = await fetch(apiUrl);
  if (!response.ok && response.status === 404) {
    notFound();
  }

  const jsonData = await response.json();

  if (jsonData.content.redirect) {
    if (jsonData.content.redirect.status === '301') {
      const destination: string = jsonData.content.redirect.destination;
      const nyStreng: string = destination.replace(/\/eid\/nb\//, '');
      redirect('/nb/' + nyStreng);
    }
  }

  return jsonData;
};

export { GetPage };
