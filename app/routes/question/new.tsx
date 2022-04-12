import {
  Box,
  Button,
  NativeSelect,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { Question } from "@prisma/client";
import { LoaderFunction, redirect, ActionFunction } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createQuestion, getCategories } from "~/db/db.server";
import { authenticator } from "~/services/auth.server";

const validateQuestion = (
  question: Pick<Question, "title" | "description"> & { category: string }
) => {
  if (!question.title || !question.description || !question.category) {
    return true;
  }

  if (
    question.title.length > 50 ||
    question.title.length < 10 ||
    question.description.length > 5000
  ) {
    return true;
  }

  return false;
};

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

  const titleRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    titleRef?.current?.focus();
  }, []);

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
          ref={titleRef}
          maxLength={50}
          mb="sm"
          pattern="^[a-zA-Z0-9'!+.-=#$%^*()_-,\s]*$"
          onInput={(event: React.FormEvent<HTMLInputElement>) => {
            if (
              event.currentTarget.validity.patternMismatch ||
              event.currentTarget.validity.valueMissing
            ) {
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
