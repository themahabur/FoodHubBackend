import { Router } from "express";
import mealsRoutes from "../modules/meals/meals.route";
import providerRoutes from "../modules/provider/provider.route";
import categoryRoutes from "../modules/category/category.route";
import ordersRoutes from "../modules/orders/orders.route";

const routes = Router();

routes.use("/providers", providerRoutes);
routes.use("/meals", mealsRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/orders", ordersRoutes);

export default routes;