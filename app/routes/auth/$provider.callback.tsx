import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};
