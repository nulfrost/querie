import { PrismaClient } from "@prisma/client";
import type { Question } from "@prisma/client";

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export async function getCategories() {
  return prisma.category.findMany();
}

export async function getLatestQuestionsForCategory(category?: string) {
  return prisma.question.findMany({
    where: {
      category: {
        name: category ?? "",
      },
    },
  });
}

// Essentially I want to sum the amount of likes a
// person has on both questions they've asked and
// comments
export async function getLeaderboard() {}

export async function getQuestionAndComments(id: string) {
  return prisma.question.findUnique({
    where: {
      id,
    },
    include: {
      comments: {
        include: {
          likes: true,
        },
      },
    },
  });
}

export async function createQuestion({
  title,
  description,
  category,
  userId,
}: {
  title: string;
  description: string;
  category: string;
  userId: string;
}) {
  return prisma.question.create({
    data: {
      title,
      description,
      author: {
        connect: {
          id: userId,
        },
      },
      category: {
        connect: {
          name: category,
        },
      },
    },
  });
}

export async function createComment({ content, userId, questionId }) {
  return prisma.comment.create({
    data: {
      content,
      author: {
        connect: {
          id: userId,
        },
      },
      question: {
        connect: {
          id: questionId,
        },
      },
    },
  });
}

// is this even right?
export async function createQuestionLike({ questionId, userId }) {
  return prisma.question.update({
    where: {
      id: questionId,
    },
    data: {
      likes: {
        create: {
          userId,
        },
      },
    },
  });
}
