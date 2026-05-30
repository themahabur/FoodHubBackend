import { Request, Response } from "express";
import { mealsService } from "./meals.service";

const getMeals = async (req: Request, res: Response) => {
  try {
    const meals = await mealsService.getMeals();

    res.send({
      success: true,
      message: "Meals fetched successfully.",
      data: meals,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while fetching meals.",
      data: null,
      error: error.message,
    });
  }
};

const createMeal = async (req: Request, res: Response) => {
  try {
    const mealData = req.body;
    const meal = await mealsService.createMeal(mealData);

    res.send({
      success: true,
      message: "Meal created successfully.",
      data: meal,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while creating meal.",
      data: null,
      error: error.message,
    });
  }
};

export const mealsController = {
  getMeals,
  createMeal,
};
