import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { SocialsProvider } from "remix-auth-socials";
import { authenticator } from "~/services/auth.server";

interface SocialButtonProps {
  provider: SocialsProvider;
  label: string;
  icon?: any;
  color?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  label,
  icon,
  color,
}) => (
  <Form action={`/auth/${provider}`} method="post" style={{ width: "30%" }}>
    <Button leftIcon={icon} color={color} type="submit" fullWidth>
      {label}
    </Button>
  </Form>
);

export default function Login() {
  return (
    <Container mt="xl">
      <Stack align="center">
        <Title order={1}>Log in</Title>
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
