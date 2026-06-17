import { Request, Response } from "express";
import { userService } from "./user.service";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await userService.registerUser({ name, email, password, role });
    res.send({
      success: true,
      message: "Registered successfully.",
      data: user,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while registering user.",
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();

    res.send({
      success: true,
      message: "Users retrieved successfully.",
      data: users,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while retrieving users.",
    });
  }
};

const getUsersById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUsersById(userId as string);

    res.send({
      success: true,
      message: "User retrieved successfully.",
      data: user,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while retrieving user.",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.updateUser(userId as string, req.body);

    res.send({
      success: true,
      message: "User updated successfully.",
      data: user,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
      error: "An error occurred while updating user.",
    });
  }
};

export const userController = {
  registerUser,
  getAllUsers,
  getUsersById,
  updateUser,
};
