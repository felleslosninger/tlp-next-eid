export const buildPath = (slugs: string[]) => {
  let currentSlug = '&path=';
  for (let i = 0; i < slugs.length; i++) {
    currentSlug += '/' + slugs[i];
  }
  return currentSlug;
};
