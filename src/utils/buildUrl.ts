import { notFound, redirect } from 'next/navigation';

import type { ApiDataType, ParamsType } from '@/types/ApiData';

export const buildUrl = ({ params }: ParamsType) => {
  let currentSlug = '&path=/';
  for (let i = 0; i < params.slug.length; i++) {
    currentSlug += params.slug[i];
  }
  return currentSlug;
};

/*export const statusHandler = async (response: Response) => {
  console.log('Response:', response.status);
  if (
    response.status === 301 ||
    response.status === 307 ||
    response.status === 304
  ) {
    const data: any = await response.json();
    const destination: any = data.content.redirect.destination;
    const nyStreng: string = destination.replace(/\/eid\/nb\//, '');
    //return redirect('/nb/' + nyStreng);
    redirect('/nb/einnsyn/mitt-einnsyn');
  } else {
    const data: ApiDataType = await response.json();
    return data;
  }
};*/
