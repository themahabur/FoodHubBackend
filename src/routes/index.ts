import { Router } from "express";
import mealsRoutes from "../modules/meals/meals.route";
import providerRoutes from "../modules/provider/provider.route";
import categoryRoutes from "../modules/category/category.route";

const routes = Router();

routes.use("/providers", providerRoutes);
routes.use("/meals", mealsRoutes);
routes.use("/categories", categoryRoutes);

export default routes;