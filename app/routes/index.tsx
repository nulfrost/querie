import { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return { user };
};

export default function Index() {
  const user = useLoaderData();

  console.log(user);

  return (
    <div>
      <h2>Hey, {user?.user?.displayName}</h2>
      <Form action="/logout" method="post">
        <button>Log out</button>
      </Form>
    </div>
  );
}
