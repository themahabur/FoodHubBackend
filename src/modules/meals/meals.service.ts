import { prisma } from "../../lib/prisma";
import { MealData } from "../../types/meal.type";

const getMeals = async () => {
  const meals = await prisma.meal.findMany();

if (meals.length === 0) {
  throw new Error("No meals found");
}

  return meals;
};

const getMealById = async (mealId: string) => {
  const meal = await prisma.meal.findUnique({
    where: {
      id: mealId,
    },
  });

  if (!meal) {
    throw new Error("Meal not found");
  }

  return meal;
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
  getMealById,
  createMeal,
};
