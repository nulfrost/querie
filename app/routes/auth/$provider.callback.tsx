import { LoaderFunction } from "@remix-run/cloudflare";
import { authenticator } from "../../services/auth.server";

export let loader: LoaderFunction = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};
