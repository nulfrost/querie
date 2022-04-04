import { Box } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getCategories } from "~/db/db.server";
import { Categories } from "~/components/ui";

export const loader: LoaderFunction = async () => {
  const categories = await getCategories();
  return { categories };
};

export default function Category() {
  const data = useLoaderData();

  return (
    <>
      <Box component="nav">
        <Categories categories={data.categories} />
      </Box>
      <Outlet />
    </>
  );
}
