import {
  ActionIcon,
  Box,
  Card,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Flag2, Heart } from "tabler-icons-react";
import { useActionModals } from "~/hooks/useActionModals";

const useStyles = createStyles((theme) => ({
  categories: {
    margin: "0 -8px",
    marginTop: theme.spacing.xl,
  },
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700,
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`,
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
  const { reportModal } = useActionModals();

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
        <Card component="article" key={index} className={classes.card}>
          <Group>
            <Box>
              <Text
                to={`/category/${data.category}`}
                size="xs"
                component={Link}
                className={classes.category}
                variant="link"
              >
                {data.category}
              </Text>{" "}
              &sim;{" "}
              <Text size="xs" component="span" color="dimmed">
                posted by nulfrost
              </Text>
            </Box>
            <Text component="time" size="xs" ml="auto" color="dimmed">
              4 hours ago
            </Text>
          </Group>
          <Title order={4} mt="sm">
            {data.category}
          </Title>
          <section>
            <Text color="dimmed" lineClamp={2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              asperiores magnam eveniet perferendis nulla nam, cupiditate cum
              iure saepe provident molestias molestiae possimus quam harum
              consectetur non eligendi facilis omnis.
            </Text>
          </section>
          <Box component="footer" mt="sm">
            <Group align="baseline" position="apart">
              <Text variant="link" size="sm">
                78 comments
              </Text>
              <Group spacing="xs" align="baseline">
                <ActionIcon color="red">
                  <Heart size={16} />
                </ActionIcon>
                <ActionIcon onClick={reportModal}>
                  <Flag2 size={16} />
                </ActionIcon>
              </Group>
            </Group>
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
}
