import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { createQuestionLike } from "~/db/db.server";

export const action: ActionFunction = async ({ request }) => {
  switch (request.method) {
    case "POST":
      const formData = await request.formData();
      const userId = await formData.get("userId");
      console.log(userId);
  }

  return {};
};

export const load: LoaderFunction = async () => {
  return redirect("/category");
};
