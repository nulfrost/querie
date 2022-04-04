import { redirect } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return redirect("/category");
};
