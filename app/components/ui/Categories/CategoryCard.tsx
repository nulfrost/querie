import {
  ActionIcon,
  Box,
  Card,
  createStyles,
  Group,
  Text,
  Title,
  Menu,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { Flag2, Heart, Copy } from "tabler-icons-react";
import { useActionModals } from "~/hooks/useActionModals";

const useStyles = createStyles((theme) => ({
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700,
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`,
  },
}));

export function CategoryCard({ category }) {
  const { reportModal } = useActionModals();

  const { classes } = useStyles();

  return (
    <Card component="article" className={classes.card}>
      <Group>
        <Box>
          <Text
            to={`/category/${category}`}
            size="xs"
            component={Link}
            className={classes.category}
            variant="link"
          >
            {category}
          </Text>{" "}
          &sim;{" "}
          <Text size="xs" component="span" color="dimmed">
            posted by dane
          </Text>
        </Box>
        {/* <ActionIcon color="red" ml="auto">
          <Heart size={16} />
        </ActionIcon> */}
        <Menu ml="auto">
          <Menu.Label>Post options</Menu.Label>
          <Menu.Item icon={<Copy size={14} />}>Copy link to post</Menu.Item>
          <Menu.Item onClick={reportModal} icon={<Flag2 size={14} />}>
            Report
          </Menu.Item>
        </Menu>
      </Group>
      <Title
        order={2}
        my="sm"
        sx={(theme) => ({
          fontSize: theme.fontSizes.lg,
        })}
      >
        {category}
      </Title>
      <section>
        <Text color="dimmed" lineClamp={2} size="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          asperiores magnam eveniet perferendis nulla nam, cupiditate cum iure
          saepe provident molestias molestiae possimus quam harum consectetur
          non eligendi facilis omnis.
        </Text>
      </section>
      <Box component="footer" mt="lg">
        <Group align="baseline" position="apart">
          <Text variant="link" size="sm">
            78 comments
          </Text>
          <Group spacing="xs" align="baseline">
            <Text component="time" size="xs" color="dimmed">
              4 hours ago
            </Text>
          </Group>
        </Group>
      </Box>
    </Card>
  );
}
