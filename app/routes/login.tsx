import { Form } from "@remix-run/react";
import { SocialsProvider } from "remix-auth-socials";
import { Container, Button, Title, Stack } from "@mantine/core";
import { BrandGoogle, BrandDiscord } from "tabler-icons-react";
import { LoaderFunction } from "@remix-run/node";
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
  <Form action={`/auth/${provider}`} method="post">
    <Button leftIcon={icon} color={color} type="submit" size="lg">
      {label}
    </Button>
  </Form>
);

export default function Login() {
  return (
    <Container mt="xl">
      <Stack align="center">
        <Title order={1}>Log in</Title>
        <SocialButton
          icon={<BrandDiscord size={18} />}
          color="indigo"
          provider={SocialsProvider.DISCORD}
          label="Login with Discord"
        />
        <SocialButton
          color="red"
          icon={<BrandGoogle size={18} />}
          provider={SocialsProvider.GOOGLE}
          label="Login with Google"
        />
      </Stack>
    </Container>
  );
}
