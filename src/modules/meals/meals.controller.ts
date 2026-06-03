import { Request, Response } from "express";
import { mealsService } from "./meals.service";

const getMeals = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    console.log("Query parameters:", query);
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
      message: error.message,
      data: null,
      error: "An error occurred while fetching meals.",
    });
  }
};

const getMealById = async (req: Request, res: Response) => {
  try {
    const mealId = req.params.id;
    const meal = await mealsService.getMealById(mealId as string);

    res.send({
      success: true,
      message: "Meal fetched successfully.",
      data: meal,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while fetching meal.",
    });
  }
};

const createMeal = async (req: Request, res: Response) => {
  try {
    const mealData = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized.",
        data: null,
        error: null,
      });
    }
    const meal = await mealsService.createMeal(mealData, userId);

    res.send({
      success: true,
      message: "Meal created successfully.",
      data: meal,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while creating meal.",
    });
  }
};

const updateMeal = async (req: Request, res: Response) => {
  try {
    const mealId = req.params.id;
    const mealData = req.body;
    const meal = await mealsService.updateMeal(mealId as string, mealData);

    res.send({
      success: true,
      message: "Meal updated successfully.",
      data: meal,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while updating meal.",
    });
  }
};

const deleteMeal = async (req: Request, res: Response) => {
  try {
    const mealId = req.params.id;
    const meal = await mealsService.deleteMeal(mealId as string);

    res.send({
      success: true,
      message: "Meal deleted successfully.",
      data: meal,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while deleting meal.",
    });
  }
};

export const mealsController = {
  getMeals,
  getMealById,
  createMeal,
  updateMeal,
  deleteMeal,
};
