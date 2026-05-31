import { prisma } from "../../lib/prisma";

interface CreateProviderData {
  businessName: string;
  logo: string;
  address: string;
  banner: string;
  description: string;
  cuisineType: string;
  deliveryTime: string;
}


const createProvider = async (data: CreateProviderData, userId: string) => {
  const result = await prisma.providerProfile.create({
    data: {
      userId: userId,
      businessName: data.businessName,
      logo: data.logo,
      address: data.address,
      banner: data.banner,
      description: data.description,
      cuisineType: data.cuisineType,
      deliveryTime: data.deliveryTime
    },
  });

  if (!result) {
    throw new Error("Failed to create provider profile");
  }


  return result;
};

const getAllProviders = () => {
  return "Get all providers";
};

export const providerService = {
  createProvider,
  getAllProviders,
};
