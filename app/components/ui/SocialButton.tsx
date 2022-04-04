import { Button } from "@mantine/core";
import { Form } from "@remix-run/react";
import { SocialsProvider } from "remix-auth-socials";

export type SocialButtonProps = {
  provider: SocialsProvider;
  label: string;
  color?: string;
};

export function SocialButton({ provider, label, color }) {
  return (
    <Form action={`/auth/${provider}`} method="post" style={{ width: "30%" }}>
      <Button color={color} type="submit" fullWidth>
        {label}
      </Button>
    </Form>
  );
}
