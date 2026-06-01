import { prisma } from "../../lib/prisma";
import { MealData } from "../../types/meal.type";



const getMeals = async () => {
  const meals = await prisma.meal.findMany();

  if (!meals) {
    throw new Error("No meals found");
  }

  return meals;
};

const createMeal = async (mealData: MealData, userId: string) => {
  const provider = await prisma.providerProfile.findUnique({
    where: {
      userId,
    },
  });

  if (!provider) {
    throw new Error("Provider profile not found");
  }

  const meal = await prisma.meal.create({
    data: {
      providerId: provider.id,
      ...mealData,
    },
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
