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
    const orders = await ordersService.getOrders(req.user?.id as string);

    res.send({
      success: true,
      message: "Orders retrieved successfully.",
      data: orders,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const getOrderById = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;
    const order = await ordersService.getOrderById(orderId as string);

    res.send({
      success: true,
      message: "Order retrieved successfully.",
      data: order,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const ordersController = {
  getOrders,
  getOrderById,
  createOrder,
};
