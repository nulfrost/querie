import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.category.createMany({
    data: [
      {
        name: "Arts",
      },
      {
        name: "Beauty",
      },
      {
        name: "Business",
      },
      {
        name: "Cars",
      },
      {
        name: "Computers",
      },
      {
        name: "Electronics",
      },
      {
        name: "Food",
      },
      {
        name: "Education",
      },
      {
        name: "Entertainment",
      },
      {
        name: "Environment",
      },
      {
        name: "Relationships",
      },
      {
        name: "Games",
      },
      {
        name: "Health",
      },
      {
        name: "Gardening",
      },
      {
        name: "Pets",
      },
      {
        name: "Parenting",
      },
      {
        name: "Science",
      },
      {
        name: "Culture",
      },
      {
        name: "Sports",
      },
      {
        name: "Travel",
      },
    ],
  });
}

seed().then(() => console.log("db seeded"));
