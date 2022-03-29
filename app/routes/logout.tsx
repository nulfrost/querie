import { ActionFunction } from "@remix-run/cloudflare";
import { authenticator } from "../services/auth.server";

export let action: ActionFunction = async ({ request, params }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
