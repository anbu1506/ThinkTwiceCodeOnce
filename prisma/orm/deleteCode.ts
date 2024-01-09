import { where } from "sequelize";
import prisma from "../prisma";
import { number } from "zod";

export default async function DeleteCodeById(id: number) {
  try {
    await prisma.code.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log("Error deleting code by id");
  }
}
