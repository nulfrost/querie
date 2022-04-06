import { Container, Stack, Text, Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { SocialsProvider } from "remix-auth-socials";
import { authenticator } from "~/services/auth.server";
import { SocialButton } from "~/components/ui";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export default function Login() {
  return (
    <Container mt="xl" size="lg">
      <Stack align="stretch">
        <Title order={1} align="center">
          Log in
        </Title>
        <Text color="dimmed" size="sm">
          Continue with one of these providers
        </Text>
        <SocialButton
          color="indigo"
          provider={SocialsProvider.DISCORD}
          label="Login with Discord"
        />
        <SocialButton
          color="red"
          provider={SocialsProvider.GOOGLE}
          label="Login with Google"
        />
        <SocialButton
          color="dark"
          provider={SocialsProvider.GITHUB}
          label="Login with Github"
        />
      </Stack>
    </Container>
  );
}
