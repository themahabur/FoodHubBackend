import { Router } from "express";
import providerRoute from "../modules/provider/provider.route";
import mealsRoutes from "../modules/meals/meals.route";

const routes = Router();

routes.use("/providers", providerRoute);
routes.use("/meals", mealsRoutes);

export default routes;