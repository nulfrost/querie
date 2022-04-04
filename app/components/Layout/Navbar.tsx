import {
  Avatar,
  Box,
  Burger,
  Button,
  Container,
  createStyles,
  Divider,
  Group,
  Menu,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { Link, useSubmit } from "@remix-run/react";
import { useState } from "react";
import {
  ChartBar,
  ChevronDown,
  Heart,
  Logout,
  Message,
  Settings,
} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));

interface Props {
  user: any;
}

export function Navbar({ user }: Props) {
  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const submit = useSubmit();

  return (
    <Box component="header" className={classes.header}>
      <Container className={classes.mainSection} size="xl">
        <Group position="apart">
          <Title order={3}>querie</Title>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          {!user?.user && (
            <Group spacing={5} className={classes.links}>
              <Button component={Link} to="/login">
                Login
              </Button>
            </Group>
          )}
          {user?.user && (
            <Menu
              size={260}
              placement="end"
              transition="pop-top-right"
              className={classes.userMenu}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              control={
                <UnstyledButton
                  className={cx(classes.user, {
                    [classes.userActive]: userMenuOpened,
                  })}
                >
                  <Group spacing={7}>
                    <Avatar
                      src={user?.user?.photos[0]?.value}
                      alt={user?.user?.displayName}
                      radius="xl"
                      size={24}
                    />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {user?.user?.displayName}
                    </Text>
                    <ChevronDown size={12} />
                  </Group>
                </UnstyledButton>
              }
            >
              <Menu.Item
                icon={<ChartBar size={14} color={theme.colors.indigo[6]} />}
              >
                Leaderboard
              </Menu.Item>
              <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
                Liked posts
              </Menu.Item>
              <Menu.Item
                icon={<Message size={14} color={theme.colors.blue[6]} />}
              >
                Your comments
              </Menu.Item>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<Settings size={14} />}>
                Account settings
              </Menu.Item>
              <Divider />
              <Menu.Item
                icon={<Logout size={14} />}
                onClick={() =>
                  submit(null, {
                    method: "post",
                    action: "/logout",
                    replace: true,
                  })
                }
              >
                Logout
              </Menu.Item>
            </Menu>
          )}
        </Group>
      </Container>
    </Box>
  );
}
