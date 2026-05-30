import { prisma } from "../../lib/prisma";

interface CreateProviderData {
  userId: string;
  businessName: string;
  logo: string;
  address: string;
  banner: string;
  description: string;
  cuisineType: string;
  deliveryTime: string;
}


const createProvider = async (data: CreateProviderData) => {
  const result = await prisma.providerProfile.create({
    data: {
      userId: data.userId,
      businessName: data.businessName,
      logo: data.logo,
      address: data.address,
      banner: data.banner,
      description: data.description,
      cuisineType: data.cuisineType,
      deliveryTime: data.deliveryTime
    },
  });
  return result;
};

const getAllProviders = () => {
  return "Get all providers";
};

export const providerService = {
  createProvider,
  getAllProviders,
};
