import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const response = await fetch("https://swapi.dev/api/people/1");
  return response;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Framsida</h1>
      <p>These pages will simulate a slow API taking 2 seconds each route</p>
      <ul>
        <li>
          <Link to='/this/is/a/starwars/person'>
            Star wars person (/this/is/a/starwars/person)
          </Link>
        </li>
        <li>
          <Link to='/this/is/a/starwars/movie'>
            Starwars movie (/this/is/a/starwars/movie)
          </Link>
        </li>
        <li>
          <Link to='/this/will/return/404'>
            This will trigger 404 (/this/will/return/404)
          </Link>
        </li>
        <li>
          <Link to='/this/will/redirect/to/'>
            This will trigger a 301 to "Star wars person"
            (/this/will/redirect/to/)
          </Link>
        </li>
      </ul>
    </div>
  );
}
