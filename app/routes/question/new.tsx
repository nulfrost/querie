import {
  Box,
  Button,
  NativeSelect,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { Question } from "@prisma/client";
import {
  LoaderFunction,
  redirect,
  ActionFunction,
  json,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import { createQuestion, getCategories } from "~/db/db.server";
import { authenticator } from "~/services/auth.server";

const validateQuestion = ({
  title,
  description,
  category,
}: Pick<Question, "title" | "description"> & { category: string }) => {
  const errors = {} as any;

  if (!title || title.trim().length > 50) {
    errors.title =
      "Please enter a valid title, length must not exceed 50 characters";
  }

  if (!description || description.trim().length > 5000) {
    errors.description =
      "Please enter a valid description, length must not exceed 5000 characters";
  }

  if (!category) {
    errors.category = "Please enter a valid category";
  }

  return errors;
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const title = body.get("title") as string;
  const description = body.get("description") as string;
  const category = body.get("category") as string;

  const user = await authenticator.isAuthenticated(request);

  const errors = validateQuestion({ title, description, category });

  if (Object.values(errors).filter(Boolean).length > 0) {
    return json(errors, { status: 422 });
  }

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
  const actionData = useActionData();
  const submit = useSubmit();

  const schema = z.object({
    title: z
      .string()
      .min(10, { message: "Title must be at least 10 characters long" })
      .max(100, { message: "Title must not exceed 100 characters" }),
    description: z
      .string()
      .min(100, { message: "Description must be at least 100 characters" })
      .max(5000, { message: "Description must not exceed 5000 characters" }),
  });

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      category: "Arts",
    },
    schema: zodResolver(schema),
  });

  const titleRef = useRef<HTMLInputElement | null>(null);

  console.log(actionData);

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
        component="form"
        onSubmit={form.onSubmit((values) =>
          submit(
            {
              title: values.title,
              description: values.description,
              category: values.category,
            },
            {
              method: "post",
              action: "/question/new",
            }
          )
        )}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Title"
          name="title"
          id="title"
          {...form.getInputProps("title")}
          error={form.errors.title || actionData?.title}
          required
          ref={titleRef}
          maxLength={50}
          mb="sm"
        />

        <Textarea
          label="Description"
          name="description"
          error={form?.errors?.description || actionData?.description}
          {...form.getInputProps("description")}
          required
          autosize
          minRows={10}
          placeholder="What's on your mind?"
          maxLength={5000}
          mb="sm"
        />
        <NativeSelect
          {...form.getInputProps("category")}
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
