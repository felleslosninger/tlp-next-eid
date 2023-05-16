export const buildUrl = (params: any) => {
  //console.log(slugs);
  let currentSlug = '';
  for (let i = 0; i < params.slug.length; i++) {
    //console.log(slugs[i]);
    currentSlug += params.slug[i];
  }
  return currentSlug;
};
