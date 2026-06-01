import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);

    return res.status(200).json({
      success: true,
      message: "Category created successfully",
      error: null,
      data: category,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
      data: null,
    });
  }
};

const getCategorys = async (req: Request, res: Response) => {
  try {
    const categorys = await categoryService.getCategorys();
    return res.status(200).json({
      success: true,
      message: "Categorys fetched successfully",
      error: null,
      data: categorys,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
      data: null,
    });
  }
};

export const categoryController = {
  createCategory,
  getCategorys,
};
