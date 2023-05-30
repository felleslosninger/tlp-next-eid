import { notFound, redirect } from 'next/navigation';

import type { ApiDataType } from '@/types/ApiData';
import { buildPath } from '@/utils/buildUrl';

const GetPage = async (lang: string, slug: string[]) => {
  let apiUrl = `http://feat01-drupal8.dmz.local/eid/${lang}/api/rest/page?`;
  if (slug !== undefined) {
    apiUrl += buildPath(slug);
  }
  const response = await fetch(apiUrl);
  if (!response.ok && response.status === 404) {
    notFound();
  }

  const jsonData: ApiDataType = (await response.json()) as ApiDataType;

  if (jsonData.content.redirect) {
    if (jsonData.content.redirect.status === '301') {
      const destination: string | undefined =
        jsonData.content.redirect.destination;
      const nyStreng = destination?.replace(/\/eid\/nb\//, '');
      if (typeof nyStreng === 'string') {
        redirect(`/${lang}/${nyStreng}`);
      }
    }
  }

  return jsonData;
};

export { GetPage };
