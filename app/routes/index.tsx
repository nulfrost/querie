import { Box, Paper, Text, Grid, createStyles } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { getCategories } from "~/db/db.server";
import { authenticator } from "~/services/auth.server";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
  },
}));

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  const categories = await getCategories();
  return { user, categories };
};

export default function Index() {
  const data = useLoaderData();
  const { classes } = useStyles();

  console.log(data);

  return (
    <Grid>
      <Grid.Col span={3}>
        <Paper p="lg" shadow="xs">
          {data?.categories?.map(({ id, name }) => (
            <Text
              component={Link}
              to={`/category/${name.toLowerCase()}`}
              key={id}
              variant="link"
              className={classes.link}
            >
              {name}
            </Text>
          ))}
        </Paper>
      </Grid.Col>
      <Grid.Col span={9}>
        <Box>
          <h2>Hey, {data?.user?.displayName ?? "Anon"}</h2>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
