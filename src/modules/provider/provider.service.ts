import { prisma } from "../../lib/prisma";

interface CreateProviderData {
  businessName: string;
  logo: string;
  address: string;
  banner: string;
  description: string;
  cuisineType: string[];
  deliveryTime: string;
}


const createProvider = async (data: CreateProviderData, userId: string) => {


  const isProvider = await prisma.providerProfile.findUnique({
    where: {
      userId: userId,
    },
  });

  if (isProvider) {
    throw new Error("User is already a Provider profile cannot create another profile");
  }

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

const getAllProviders = async () => {
  const providers = await prisma.providerProfile.findMany();

  if(providers.length === 0) {
    throw new Error("No providers found");
  }

  return providers;
};

const getProviderById = async (id: string) => {
  const provider = await prisma.providerProfile.findUnique({
    where: { id },
    include: {
      user: true
    }
  });

  if (!provider) {
    throw new Error("Provider not found");
  }

  return provider;
};

export const providerService = {
  createProvider,
  getAllProviders,
  getProviderById
};
