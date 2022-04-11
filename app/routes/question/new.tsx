import {
  Box,
  Button,
  NativeSelect,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { LoaderFunction, redirect, ActionFunction } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { createQuestion, getCategories } from "~/db/db.server";
import { authenticator } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const title = body.get("title") as string;
  const description = body.get("description") as string;
  const category = body.get("category") as string;

  const user = await authenticator.isAuthenticated(request);

  await createQuestion({
    title,
    description,
    category,
    //@ts-ignore
    userId: user?.profile?.id,
  });

  return redirect(`/category/${category.toLowerCase()}`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);

  if (!user) {
    return redirect("/category");
  }

  const categories = await getCategories();

  const categoryNames = categories.map((category) => category.name);

  return { categoryNames };
};

export default function New() {
  const { categoryNames } = useLoaderData();
  const transition = useTransition();

  return (
    <Box
      mt="lg"
      sx={(theme) => ({
        maxWidth: theme.breakpoints.xs,
        margin: "0 auto",
      })}
    >
      <Title order={1} align="left" mb="lg">
        Ask a question
      </Title>
      <Box
        component={Form}
        method="post"
        action="."
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Title"
          name="title"
          id="title"
          required
          maxLength={30}
          mb="sm"
          pattern="[A-Za-z]+"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            if (event.currentTarget.validity.patternMismatch) {
              event.currentTarget.setCustomValidity(
                "Please enter a valid title"
              );
              event.currentTarget.reportValidity();
            } else {
              event.currentTarget.setCustomValidity("");
            }
          }}
        />
        <Textarea
          label="Description"
          name="description"
          required
          autosize
          minRows={10}
          placeholder="What's on your mind?"
          maxLength={5000}
          mb="sm"
        />
        <NativeSelect
          data={categoryNames}
          label="Category"
          name="category"
          placeholder="Choose a category"
          required
          mb="sm"
        />
        <Button
          sx={{ alignSelf: "flex-end" }}
          type="submit"
          loading={transition.state === "submitting"}
          disabled={transition.state === "submitting"}
        >
          Post question
        </Button>
      </Box>
    </Box>
  );
}
