import {
  Anchor,
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
  UnstyledButton,
  useMantineColorScheme,
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
  Moon,
  Settings,
  Sun,
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
  logo: {},
}));

interface Props {
  user: any;
}

export function Navbar({ user }: Props) {
  const { classes, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const submit = useSubmit();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box component="header" className={classes.header}>
      <Container className={classes.mainSection} size="xl">
        <Group position="apart">
          <Text
            component={Link}
            to="/category"
            weight={700}
            size="xl"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          >
            querie
          </Text>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          {!user?.user?.profile && (
            <Group spacing={20} className={classes.links}>
              <Anchor component={Link} to="/leaderboard">
                Leaderboard
              </Anchor>
              <Button component={Link} to="/login">
                Login
              </Button>
            </Group>
          )}
          {user?.user?.profile && (
            <Group>
              <Button component={Link} to="/question/new">
                Ask a question
              </Button>
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
                        src={user?.user?.profile?.image_url}
                        alt={user?.user?.profile?.username}
                        radius="xl"
                        size={24}
                      />
                      <Text
                        weight={500}
                        size="sm"
                        sx={{ lineHeight: 1 }}
                        mr={3}
                      >
                        {user?.user?.profile?.username}
                      </Text>
                      <ChevronDown size={12} />
                    </Group>
                  </UnstyledButton>
                }
              >
                <Menu.Item
                  component={Link}
                  to="/leaderboard"
                  icon={<ChartBar size={14} />}
                >
                  Leaderboard
                </Menu.Item>
                {/* <Menu.Item
                  icon={<Heart size={14} color={theme.colors.red[6]} />}
                >
                  Liked posts
                </Menu.Item>
                <Menu.Item
                  icon={<Message size={14} color={theme.colors.blue[6]} />}
                >
                  Your comments
                </Menu.Item> */}
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item icon={<Settings size={14} />}>
                  Account settings
                </Menu.Item>
                <Menu.Item
                  onClick={() => toggleColorScheme()}
                  icon={
                    colorScheme === "light" ? (
                      <Sun size={14} />
                    ) : (
                      <Moon size={14} />
                    )
                  }
                >
                  Current theme: {colorScheme}{" "}
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
            </Group>
          )}
        </Group>
      </Container>
    </Box>
  );
}
