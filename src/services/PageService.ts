import { notFound, redirect } from 'next/navigation';

import type { ParamsType, ApiDataType } from '@/types/ApiData';
import { buildPath } from '@/utils/buildUrl';

const GetPage = async ({ params }: ParamsType) => {
  let apiUrl = `http://feat01-drupal8.dmz.local/eid/${params.lang}/api/rest/page?`;

  if (params.slug !== undefined) {
    apiUrl += buildPath(params.slug);
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
        redirect(`/nb/${nyStreng}`);
      }
    }
  }

  return jsonData;
};

export { GetPage };
