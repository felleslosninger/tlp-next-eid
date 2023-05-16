import { buildUrl } from '@/utils/buildUrl';
const GetPage = async (params: any) => {
  const path = buildUrl(params);
  console.log(path);
  const response = await fetch(
    'http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=' +
      params.lang +
      '&path=/' +
      path,
  );
  return response.json();
};

export { GetPage };
