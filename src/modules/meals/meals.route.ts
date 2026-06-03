import { Router } from "express";
import { mealsController } from "./meals.controller";
import authorize from "../../middleware/authorize";

const mealsRoutes = Router();

mealsRoutes.get("/", mealsController.getMeals);
mealsRoutes.get("/:id", mealsController.getMealById);
mealsRoutes.put("/:id",authorize("ADMIN", "PROVIDER") , mealsController.updateMeal);
mealsRoutes.delete("/:id",authorize("ADMIN", "PROVIDER") , mealsController.deleteMeal);


mealsRoutes.post(
  "/",
  authorize("ADMIN", "PROVIDER"),
  mealsController.createMeal,
);


export default mealsRoutes;
