import prisma from "@/prisma/prisma";
import getSession from "./getSession";
import { unstable_noStore as noStore } from "next/cache";

export default async function fetchSearchQuestions(query?: string) {
  if (!query) {
    return [];
  }
  let searchResults: { question: string; id: number }[] = [];
  try {
    searchResults = await prisma.code.findMany({
      select: {
        question: true,
        id: true,
      },
      where: {
        question: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
  return searchResults;
}

export async function fetchTopTen() {
  noStore();
  try {
    const latestQuestions = await prisma.code.findMany({
      orderBy: {
        id: "desc",
      },
      take: 10,
    });
    return latestQuestions;
  } catch (error) {
    console.error("Error fetching latest 10 posts:", error);
  }
}

export async function fetchQuestion(id: string) {
  noStore();
  try {
    const question = await prisma.code.findFirst({
      where: {
        id: Number(id),
      },
    });

    return question;
  } catch (error) {
    console.error("Error fetching question:", error);
  }
}

export async function fetchUploads(userId: string) {
  noStore();
  const session = await getSession();
  try {
    const myuploads = await prisma.code.findMany({
      where: {
        userId: userId,
      },
    });

    return myuploads;
  } catch (error) {
    console.error("Error fetching my uploads:", error);
  }
}

export async function getUploadsCount(userId: string) {
  const count = await prisma.code.count({
    where: {
      userId: userId,
    },
  });
  return count;
}

export async function getUserLikes(userId: string) {
  const likesCount = await prisma.code.aggregate({
    where: {
      userId: userId,
    },
    _sum: {
      likes: true,
    },
  });

  return likesCount._sum.likes || 0;
}

export async function getUser(userId: string) {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return user;
}

