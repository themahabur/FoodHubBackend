import { Request, Response } from "express";
import { ordersService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: "User not authenticated.",
        data: null,
        error: "User not authenticated.",
      });
    }
    const order = await ordersService.createOrder(orderData, userId);
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
