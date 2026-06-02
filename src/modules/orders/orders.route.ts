import { Router } from "express";
import { ordersController } from "./orders.controller";


const ordersRoutes=Router();

ordersRoutes.post("/", ordersController.createOrder);
ordersRoutes.get("/", ordersController.getOrders);

export default ordersRoutes;