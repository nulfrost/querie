import { createStyles, Pagination, SimpleGrid } from "@mantine/core";
import { Question } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { QuestionCard } from "~/components/ui/Categories";
import { getLatestQuestionsForCategory } from "~/db/db.server";
import { authenticator } from "~/services/auth.server";

const useStyles = createStyles((theme) => ({
  categories: {
    margin: `${theme.spacing.xl}px -8px`,
  },

  divider: {
    border: `1px solid ${theme.colors.gray[1]}`,
  },
}));

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const [user, questions] = await Promise.all([
      await authenticator.isAuthenticated(request),
      await getLatestQuestionsForCategory(),
    ]);

    return json({ user, questions });
  } catch (e) {
    console.error(e);
  }
};

export default function Index() {
  const { classes } = useStyles();
  const { user, questions } = useLoaderData<{
    user: any;
    questions: (Question & {
      author: {
        id: string;
        username: string;
      };
      category: {
        name: string;
      };
    })[];
  }>();

  const isAuthenticated = user ? true : false;

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
              id={id}
              title={title}
              description={description}
              createdAt={createdAt}
              category={category}
              author={author}
              isAuthenticated={isAuthenticated}
            />
          )
        )}
      </SimpleGrid>
      {questions.length > 22 && <Pagination total={10} position="center" />}
    </>
  );
}
