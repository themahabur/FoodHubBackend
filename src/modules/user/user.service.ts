import { prisma } from "../../lib/prisma";

const getAllUsers = async () => {
  const result = await prisma.user.findMany();

  if (result.length === 0) {
    throw new Error("No users found.");
  }

  return result;
};

const getUsersById = async (userId: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!result) {
    throw new Error("User not found.");
  }

  return result;
};

const updateUser = async (userId: string, data: any) => {
  const result = await prisma.user.update({
    where: {    
      id: userId,  
    },    
    data: data,    
  });    
  if (!result) {    
    throw new Error("User not updated.");    
  }    
  return result;    
};

export const userService = {
  getAllUsers,
  getUsersById,
  updateUser,
};
