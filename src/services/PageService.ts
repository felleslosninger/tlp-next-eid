import { buildUrl } from '@/utils/buildUrl';
const GetPage = async (params: any) => {
  console.log('tesstttt', params.slug);
  let path = '';
  if (params.slug !== undefined) {
    path = buildUrl(params);
  }

  const response = await fetch(
    'http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=' +
      params.lang +
      path,
  );
  return response.json();
};

export { GetPage };
