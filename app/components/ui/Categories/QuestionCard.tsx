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
import { Question } from "@prisma/client";
import { Link } from "@remix-run/react";
import { Flag2, Heart, Copy } from "tabler-icons-react";
import { useActionModals } from "~/hooks/useActionModals";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const useStyles = createStyles((theme) => ({
  category: {
    color: theme.colors.blue[5],
    fontWeight: 700,
  },
  card: {
    border: `2px solid ${theme.colors.gray[3]}`,
    display: "flex",
    flexDirection: "column",
  },
}));

type QuestionCardProps = Question & {
  category: {
    name: string;
  };
  author: {
    username: string;
  };
};

export function QuestionCard({
  createdAt,
  description,
  title,
  author,
  category,
}: Partial<QuestionCardProps>) {
  const { reportModal } = useActionModals();

  const { classes } = useStyles();

  return (
    <Card component="article" className={classes.card}>
      <Group>
        <Box>
          <Text
            to={`/category/${category.name.toLowerCase()}`}
            size="xs"
            component={Link}
            className={classes.category}
            variant="link"
          >
            {category.name}
          </Text>{" "}
          &sim;{" "}
          <Text size="xs" component="span" color="dimmed">
            posted by {author.username} &bull; {dayjs(createdAt).fromNow()}
          </Text>
        </Box>
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
        {title}
      </Title>
      <section>
        <Text color="dimmed" lineClamp={2} size="sm" mb="lg">
          {description}
        </Text>
      </section>
      <Box component="footer" mt="auto">
        <Group align="center" position="apart">
          <Text variant="link" size="sm">
            78 comments
          </Text>
          <Group spacing="xs">
            <ActionIcon color="red" ml="auto">
              <Heart size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Box>
    </Card>
  );
}
