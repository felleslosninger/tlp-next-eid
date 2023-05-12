import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPage } from "~/routes";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async ({ params }: LoaderArgs) => {
  const response = await getPage("d");
  return response;
};

export default function Id() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to='/'>Back</Link>
      <h1>Tes2t</h1>
      <p>{data.name}</p>
    </div>
  );
}
