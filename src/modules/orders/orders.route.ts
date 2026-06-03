import { Router } from "express";
import { ordersController } from "./orders.controller";
import authorize from "../../middleware/authorize";


const ordersRoutes=Router();

ordersRoutes.post("/",authorize("ADMIN" , "CUSTOMER") , ordersController.createOrder);
ordersRoutes.get("/",authorize("ADMIN" , "CUSTOMER") , ordersController.getOrders);
ordersRoutes.get("/:id",authorize("ADMIN" , "CUSTOMER") , ordersController.getOrderById);

export default ordersRoutes;