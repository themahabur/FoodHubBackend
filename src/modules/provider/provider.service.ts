import { prisma } from "../../lib/prisma";

interface CreateProviderData {
  businessName: string;
  logo: string | null;
  banner: string | null;
  description: string;
  cuisineType: string[];
  deliveryTime: string;
  address: string;
  minOrder: number | null;
  isOpen: boolean;
  tags: string[];
}

const createProvider = async (data: CreateProviderData, userId: string) => {
  console.log("data", data, userId);

  const isProvider = await prisma.providerProfile.findUnique({
    where: {
      userId: userId,
    },
  });

  if (isProvider) {
    const result = await prisma.providerProfile.update({
      where: {
        userId: userId,
      },
      data: data,
    });

    if (!result) {
      throw new Error("Failed to update provider profile");
    }
    return result;
  }

  const result = await prisma.providerProfile.create({
    data: {
      userId: userId,
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create provider profile");
  }

  return result;
};

const getAllProviders = async () => {
  const providers = await prisma.providerProfile.findMany({
    include: {
      user: true,
    },
  });

  if (providers.length === 0) {
    throw new Error("No providers found");
  }

  return providers;
};

const getProviderById = async (id: string) => {
  const provider = await prisma.providerProfile.findUnique({
    where: { userId: id },
    include: {
      user: true,
    },
  });

  if (!provider) {
    throw new Error("Provider not found");
  }

  return provider;
};

export const providerService = {
  createProvider,
  getAllProviders,
  getProviderById,
};
