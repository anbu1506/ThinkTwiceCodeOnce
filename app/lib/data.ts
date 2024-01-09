import prisma from "@/prisma/prisma";
import getSession from "./getSession";

export default async function fetchSearchQuestions(query?: string) {
  let searchResults: { question: string; id: number }[] = [];
  try {
    searchResults = await prisma.$queryRaw`
    SELECT question , id FROM Code
    WHERE question LIKE  CONCAT('%', ${query}, '%');`;
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
  return searchResults;
}

export async function fetchTopTen() {
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

export async function fetchMyuploads() {
  const session = await getSession();
  try {
    const myuploads = await prisma.code.findMany({
      where: {
        user: session.user.id,
      },
    });

    return myuploads;
  } catch (error) {
    console.error("Error fetching my uploads:", error);
  }
}

export async function getUploadsCount() {
  const session = await getSession();
  const count = await prisma.code.count({
    where: {
      user: session.user.id,
    },
  });
  return count;
}
