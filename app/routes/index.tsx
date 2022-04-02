import { Box, Container, Paper, Text, Title, Grid } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};

export default function Index() {
  const user = useLoaderData();

  console.log(user);

  return (
    <Container mt="xl">
      <Grid>
        <Grid.Col span={3}>
          <Paper p="lg" shadow="xs">
            <Text variant="link">Cars</Text>
            <Text variant="link">Electronics</Text>
            <Text variant="link">Business</Text>
          </Paper>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box>
            <h2>Hey, {user?.user?.displayName}</h2>
            <Form action="/logout" method="post">
              <button>Log out</button>
            </Form>
          </Box>
        </Grid.Col>
        <Grid.Col span={3}>
          <Paper p="lg">
            <Title order={4}>Leaderboard</Title>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
