import { PrismaClient } from "@prisma/client";
import {
  DiscordProfile,
  GitHubProfile,
  GoogleProfile,
} from "remix-auth-socials";

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export async function getCategories() {
  return prisma.category.findMany();
}

export async function getLatestQuestionsForCategory(
  category?: string,
  page = 0
) {
  if (!category) {
    return prisma.question.findMany({
      take: 22,
      skip: 22 * page,
      orderBy: {
        createdAt: "asc",
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        author: {
          select: {
            username: true,
          },
        },
      },
    });
  }

  return prisma.question.findMany({
    take: 22,
    skip: 22 * page,
    where: {
      category: {
        name: category,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
      author: {
        select: {
          username: true,
        },
      },
    },
  });
}

// Essentially I want to sum the amount of likes a
// person has on both questions they've asked and
// comments
// raw query?
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

export async function createComment({
  content,
  userId,
  questionId,
}: {
  content: string;
  userId: string;
  questionId: string;
}) {
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
export async function createQuestionLike({
  questionId,
  userId,
}: {
  questionId: string;
  userId: string;
}) {
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

export async function findOrCreateUser(
  profile: GoogleProfile | DiscordProfile | GitHubProfile
) {
  return prisma.user.upsert({
    where: {
      email: profile?.emails[0]?.value,
    },
    update: {
      username: profile?.displayName,
      connection: profile?.provider,
      image_url: profile?.photos[0].value,
      email: profile?.emails[0]?.value,
    },
    create: {
      email: profile?.emails[0].value,
      username: profile?.displayName,
      connection: profile?.provider,
      image_url: profile?.photos[0].value,
    },
  });
}
