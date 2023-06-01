import { notFound, redirect } from 'next/navigation';

import { getAPIURL } from '@/middleware';
import type { ApiDataType, langType } from '@/types/ApiData';
import { buildPath } from '@/utils/buildUrl';

type pageResponse = {
  response: Response;
  jsonData: ApiDataType;
};

/**
 * function that returns the reponse and jsonData related to page from the API
 * @param lang Language prefix
 * @param slug Slug array
 * @returns
 */

const getPageData = async (lang: langType, slug: string[], host: string) => {
  console.log(host)
  let apiUrl = `https://${host}/${lang}/api/rest/page?`;
  if (slug !== undefined) {
    apiUrl += buildPath(slug);
  }
  const response = await fetch(apiUrl);

  const jsonData: ApiDataType = (await response.json()) as ApiDataType;
  return { response, jsonData };
};

/**
 * function that handles status responses
 * @param response Api response
 * @param jsonData JsonData
 * @param lang Language prefix
 */
const handleResponse = (
  response: Response,
  jsonData: ApiDataType,
  lang: string,
) => {
  if (!response.ok && response.status === 404) {
    notFound();
  }

  if (jsonData.content.redirect) {
    if (jsonData.content.redirect.status === '301') {
      const destination: string | undefined =
        jsonData.content.redirect.destination;
      const path = destination?.replace(/\/eid\/nb\//, '');
      if (typeof path === 'string') {
        redirect(`/${lang}/${path}`);
      }
    }
  }
};

export type { pageResponse };
export { getPageData, handleResponse };
