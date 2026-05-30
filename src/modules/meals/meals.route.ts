import { Router } from "express";
import { mealsController } from "./meals.controller";

const mealsRoutes = Router();

mealsRoutes.get("/", mealsController.getMeals);
mealsRoutes.post("/", mealsController.createMeal);


export default mealsRoutes;