import { redirect } from 'next/navigation';

import type { ParamsType } from '@/types/ApiData';

export const buildUrl = ({ params }: ParamsType) => {
  let currentSlug = '&path=/';
  for (let i = 0; i < params.slug.length; i++) {
    currentSlug += params.slug[i];
  }
  return currentSlug;
};

export const statusHandler = async (response: Response) => {
  /*if (response.status === 404) {
    notFound();
  }*/
  if (response.status === 301 || response.status === 304) {
    //const data: any = await response.json();
    //const destination: any = data.content.redirect.destination;
    //console.log('fewgehbrthb', destination);
    //redirect(nyTekst);
    redirect('/nb/id-porten');
  }
};
