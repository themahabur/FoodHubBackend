import { Router } from "express";
import { ordersController } from "./orders.controller";
import authorize from "../../middleware/authorize";


const ordersRoutes=Router();

ordersRoutes.post("/",authorize("ADMIN" , "CUSTOMER") , ordersController.createOrder);
ordersRoutes.get("/", ordersController.getOrders);
ordersRoutes.get("/:id",authorize("ADMIN" , "CUSTOMER") , ordersController.getOrderById);
ordersRoutes.patch("/:id",authorize("ADMIN" , "PROVIDER") , ordersController.updateOrderStatus);

export default ordersRoutes;