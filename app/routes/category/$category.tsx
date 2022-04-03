import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  const category = params.category;
  return { category };
};

export default function Category() {
  const data = useLoaderData();

  return (
    <div>
      <h2>{data.category}</h2>
    </div>
  );
}
