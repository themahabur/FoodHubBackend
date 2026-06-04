export interface CreateOrderPayload {
  deliveryAddress: string;
  contactPhone: string;
  notes?: string;

  items: {
    mealId: string;
    quantity: number;
    unitPrice: number;
  }[];
}