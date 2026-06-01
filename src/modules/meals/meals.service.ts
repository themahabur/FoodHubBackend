import { prisma } from "../../lib/prisma";

const getMeals = async () => {
  const meals = await prisma.meal.findMany();

  if (!meals) {
    throw new Error("No meals found");
  }

  return meals;
};

const createMeal = async (mealData: any) => {
  
  const meal = await prisma.meal.create({
    data: mealData,
  });

  if (!meal) {
    throw new Error("Failed to create meal");
  }

  return meal;
};

export const mealsService = {
  getMeals,
  createMeal,
};
