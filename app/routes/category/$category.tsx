import { createStyles, Pagination, SimpleGrid, Title } from "@mantine/core";
import { Question } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { QuestionCard } from "~/components/ui/Categories";
import { getLatestQuestionsForCategory } from "~/db/db.server";

const useStyles = createStyles((theme) => ({
  categories: {
    margin: `${theme.spacing.xl}px -8px`,
  },

  divider: {
    border: `1px solid ${theme.colors.gray[1]}`,
  },
}));

export const loader: LoaderFunction = async ({ params }) => {
  const questions = await getLatestQuestionsForCategory(
    params.category[0].toUpperCase() + params.category.slice(1)
  );
  return json(questions);
};

export default function Category() {
  const questions = useLoaderData<
    (Question & {
      author: {
        username: string;
      };
      category: {
        name: string;
      };
    })[]
  >();
  const { classes } = useStyles();

  return (
    <>
      <SimpleGrid
        className={classes.categories}
        cols={1}
        breakpoints={[
          { minWidth: "xs", cols: 2 },
          { minWidth: "lg", cols: 3 },
        ]}
      >
        {questions.map(
          ({ id, title, description, createdAt, category, author }) => (
            <QuestionCard
              key={id}
              title={title}
              description={description}
              createdAt={createdAt}
              category={category}
              author={author}
            />
          )
        )}
      </SimpleGrid>
      {questions.length > 22 && <Pagination total={10} position="center" />}
    </>
  );
}
