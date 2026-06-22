import { Request, Response } from "express";
import { providerService } from "./provider.service";

const createProvider = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized.",
        data: null,
        error: null,
      });
    }
    const result = await providerService.createProvider(
      req.body,
      req.user.id as string,
    );

    res.send({
      success: true,
      message: "Provider created successfully.",
      data: result,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while creating provider.",
      data: null,
      error: error.message,
    });
  }
};

const getAllProviders = async (req: Request, res: Response) => {
  try {
    const providers = await providerService.getAllProviders();
    res.send({
      success: true,
      message: "Providers retrieved successfully.",
      data: providers,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while retrieving providers.",
      data: null,
      error: error.message,
    });
  }
};

const getProviderById = async (req: Request, res: Response) => {
  try {

    if (!req.user || !req.user.id) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized.",
        data: null,
        error: null,
      });
    }
    const providerId = req.user.id;
    console.log(providerId);
    const provider = await providerService.getProviderById(providerId);
    res.send({
      success: true,
      message: "Provider retrieved successfully.",
      data: provider,
      error: null,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "An error occurred while retrieving provider.",
      data: null,
      error: error.message,
    });
  }
};

export const providerController = {
  createProvider,
  getAllProviders,
  getProviderById
};
