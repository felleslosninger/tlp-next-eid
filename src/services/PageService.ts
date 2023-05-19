import type { ParamsType } from '@/types/ApiData';

const buildPath = (slugs: string[]) => {
  let currentSlug = '&path=';
  for (let i = 0; i < slugs.length; i++) {
    currentSlug += '/' + slugs[i];
  }
  console.log('Current slug', currentSlug);
  return currentSlug;
};

const GetPage = async ({ params }: ParamsType) => {
  let apiUrl = `http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=${params.lang}`;

  if (params.slug !== undefined) {
    apiUrl += buildPath(params.slug);
  }
  const response = await fetch(apiUrl);
  return response;
};

export { GetPage };
