import prisma from "../prisma";
import { Code } from "../types";

export async function createCode(data: Code) {
  prisma.$connect();
  try {
    return await prisma.code.create({ data });
  } catch (error: any) {
    console.log("Error creating code");
  } finally {
    await prisma.$disconnect();
  }
}
