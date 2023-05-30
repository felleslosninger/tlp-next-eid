export type ApiDataType = {
  content: {
    redirect?: {
      source?: string;
      destination?: string;
      status?: string;
    };
    messages: [lang: string, title: string, Body: string];
    breadcrumb: [];
    menu: [];
    node: {
      nid: string;
      type: string;
      lang: string;
      created: string;
      updated: string;
      published: boolean;
      promoted: boolean;
      url: string;
      title: string;
      body: string;
    };
  };
};

export type langType = 'en' | 'no' | 'se';
export type slugType = string[];

export interface ParamsType {
  slug: slugType;
  lang: langType;
}

export interface PageParamsType {
  params: ParamsType;
}
