import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface createUser {
  name: string;
  email: string;
  password: string;
  role: string;
}

const registerUser = async (data: createUser) => {

  const role = data.role === "PROVIDER" ? "PROVIDER" : "CUSTOMER";


   const user = await auth.api.signUpEmail({
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
        role,
       
      },
    });



  return user;

}
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

  if(!userId) {
    throw new Error("User not found.");
  }

  if(data.role === "admin" || data.role === "ADMIN") {
    throw new Error("Cannot update to admin role.");
  }

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
  registerUser,
  getAllUsers,
  getUsersById,
  updateUser,
};
