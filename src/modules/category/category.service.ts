import { prisma } from "../../lib/prisma";

const createCategory = async (data: any) => {
  const { name, slug } = data;

  const existingCategory = await prisma.category.findUnique({
    where: {
      slug,
    },
  });

  if (existingCategory) {
    throw new Error("Category already exists");
  }

  const result = await prisma.category.create({
    data: {
      name,
      slug,
    },
  });

  if (!result) {
    throw new Error("Category not created");
  }

  return result;
};

const getCategorys = async () => {
  const result = await prisma.category.findMany();

  if (!result) {
    throw new Error("Categorys not found");
  }
  
  return result;
};

export const categoryService = {
  createCategory,
  getCategorys,
};
