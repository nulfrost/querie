import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useState } from "react";
import { Navbar } from "~/components/Layout/Navbar";
import styles from "~/styles/globals.css";
import { Footer } from "./components/Layout/Footer";
import { authenticator } from "./services/auth.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "querie | ask your wildest questions",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      href: styles,
      rel: "stylesheet",
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};

export default function App() {
  const user = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <Box
        component="body"
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[2],
        })}
      >
        <MantineTheme>
          <ModalsProvider>
            <NotificationsProvider
              limit={2}
              autoClose={3000}
              position="top-center"
            >
              <Navbar user={user} />
              <Container size="xl" role="main" mt="xl">
                <Outlet />
              </Container>
              <Footer links={[{ link: "#", label: "Github" }]} />
            </NotificationsProvider>
          </ModalsProvider>
        </MantineTheme>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Box>
    </html>
  );
}

function MantineTheme({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withNormalizeCSS
        withGlobalStyles
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
