import {
  Box,
  Button,
  NativeSelect,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getCategories } from "~/db/db.server";

export const loader: LoaderFunction = async () => {
  const categories = await getCategories();

  return { categories };
};

export default function New() {
  const { categories } = useLoaderData();

  return (
    <Box
      mt="lg"
      sx={(theme) => ({
        maxWidth: theme.breakpoints.xs,
      })}
    >
      <Title order={1} align="left">
        Ask a question
      </Title>
      <Box component={Form}>
        <TextInput label="Title" name="title" required maxLength={30} mb="sm" />
        <Textarea
          label="Description"
          required
          autosize
          minRows={10}
          placeholder="What's on your mind?"
          maxLength={5000}
          mb="sm"
        />
        <NativeSelect
          data={categories.map((category) => category.name)}
          label="Category"
          placeholder="Choose a category"
          required
          mb="sm"
        />
        <Button>Post question</Button>
      </Box>
    </Box>
  );
}
