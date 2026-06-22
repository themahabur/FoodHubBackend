export interface MealData {
  categoryId: string;
  title: string;
  description?: string;
  image?: string;
  price: number;
  stock: number;
  isAvailable?: boolean;
  preparationTime: number;
}