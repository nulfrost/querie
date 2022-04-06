import { createStyles, SimpleGrid, Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CategoryCard } from "~/components/ui/Categories";

const useStyles = createStyles((theme) => ({
  categories: {
    margin: "0 -8px",
    marginTop: theme.spacing.xl,
  },

  divider: {
    border: `1px solid ${theme.colors.gray[1]}`,
  },
}));

export const loader: LoaderFunction = async ({ params }) => {
  const category = params.category;
  return { category };
};

export default function Category() {
  const data = useLoaderData();
  const { classes } = useStyles();

  return (
    <SimpleGrid
      className={classes.categories}
      cols={1}
      breakpoints={[
        { minWidth: "xs", cols: 2 },
        { minWidth: "lg", cols: 3 },
      ]}
    >
      {Array.from({ length: 20 }, (_, index) => (
        <CategoryCard category={data.category} />
      ))}
    </SimpleGrid>
  );
}
