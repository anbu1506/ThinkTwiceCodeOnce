import prisma from "../prisma";

export default async function deleteCodeById(id: number) {
  try {
    await prisma.code.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log("Error deleting code by id", error);
  }
}
