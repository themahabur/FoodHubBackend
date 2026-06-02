import { Request, Response } from "express";
import { ordersService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order= await ordersService.createOrder(req.body);
    res.send({
      success: true,
      message: "Order created successfully.",
      data: order,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while creating the order.",
      data: null,
      error: error.message,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await ordersService.getOrders();

    res.send({
      success: true,
      message: "Orders retrieved successfully.",
      data: orders,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while retrieving orders.",
      data: null,
      error: error.message,
    });
  }
};

export const ordersController = {
  getOrders,

  createOrder,
};
