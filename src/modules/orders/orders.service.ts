import { prisma } from "../../lib/prisma";

interface CreateOrderPayload {
  deliveryAddress: string;
  contactPhone: string;
  notes?: string;

  items: {
    mealId: string;
    quantity: number;
    unitPrice: number;
  }[];
}

const getOrders = async () => {
  return "This is the orders service.";
};

const createOrder = async (orderData: CreateOrderPayload, userId: string) => {
  let totalPrice = 0;

  const mealIds = orderData.items.map((item) => item.mealId);

  const meals = await prisma.meal.findMany({
    where: {
      id: {
        in: mealIds,
      },
    },
  });

  const orderItemsData = orderData.items.map((item) => {
    const meal = meals.find((m) => m.id === item.mealId);

    if (!meal) {
      throw new Error("Meal not found");
    }

    const unitPrice = Number(meal.price);
    const subtotal = unitPrice * item.quantity;

    totalPrice += subtotal;

    return {
      mealId: item.mealId,
      quantity: item.quantity,
      unitPrice,
      subtotal,
    };
  });

  const order = await prisma.order.create({
    data: {
      customerId: userId,
      totalPrice,
      deliveryAddress: orderData.deliveryAddress,
      contactPhone: orderData.contactPhone,
      notes: orderData.notes ?? null,

      orderItems: {
        create: orderItemsData,
      },
    },
    include: {
      orderItems: true,
    },
  });

  if (!order) {
    throw new Error("Failed to create order");
  }

  return order;
};

export const ordersService = {
  getOrders,
  createOrder,
};
