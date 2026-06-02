import { prisma } from "../../lib/prisma";

interface CreateOrderPayload {
  deliveryAddress: string;
  contactPhone: string;
  notes?: string ;

  items: {
    mealId: string;
    quantity: number;
  }[];
}

const getOrders = async () => {
  return "This is the orders service.";
};


const createOrder = async (orderData: CreateOrderPayload, userId: string) => {
  await prisma.$transaction(async (prisma) => {
    const order = await prisma.order.create({
      data: {
        customerId: userId,
        deliveryAddress: orderData.deliveryAddress,
        contactPhone: orderData.contactPhone,
        notes: orderData.notes,
      },
    });

    const orderItems = orderData.items.map((item) => ({
      orderId: order.id,
      mealId: item.mealId,
      quantity: item.quantity,
    }));

    await prisma.orderItem.createMany({ data: {orderItems} });
  });
}

export const ordersService = {
  getOrders,
  createOrder
};
