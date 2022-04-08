import { Box, Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { getCategories } from "~/db/db.server";
import { Categories } from "~/components/ui";

export const loader: LoaderFunction = async () => {
  const categories = await getCategories();
  return { categories };
};

export default function Category() {
  const data = useLoaderData();
  const { category } = useParams();

  return (
    <>
      <Box component="nav">
        <Title order={1} mb="lg">
          {category ? category : "Latest questions"}
        </Title>
        <Categories categories={data.categories} />
      </Box>
      <Outlet />
    </>
  );
}
