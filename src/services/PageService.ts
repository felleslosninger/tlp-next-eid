const GetPage = async () => {
  const response = await fetch(
    'http://feat01-drupal8.dmz.local/eid/nb/api/rest/page?lang=nb&path=/id-porten',
  );
  return response.json();
};

export { GetPage };
