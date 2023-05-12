import { redirect } from "@remix-run/node";

const Routes: {
  [index: string]: { redirect: string | null; notFound: boolean; name: string };
} = {
  "/this/is/a/starwars/person": {
    name: "Luke skyWalker",
    redirect: null,
    notFound: false,
  },
  "/this/is/a/starwars/movie": {
    name: "Old Republic",
    redirect: null,
    notFound: false,
  },
  "/this/will/return/404": {
    name: "404",
    redirect: null,
    notFound: true,
  },
  "/this/will/redirect/to/": {
    name: "301",
    redirect: "/this/is/a/starwars/person",
    notFound: false,
  },
};

const getPage = async (url: string) => {
  return await fetch("https://swapi.dev/api/people/4");
};

export { Routes, getPage };
