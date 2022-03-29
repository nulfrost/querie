import {
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = () => redirect("/login");

export let action: ActionFunction = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request);
};
