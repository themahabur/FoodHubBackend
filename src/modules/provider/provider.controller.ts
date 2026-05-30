import { Request, Response } from "express";
import { providerService } from "./provider.service";


const createProvider = async (req:Request, res: Response) => {
    try {
        const result = await providerService.createProvider(req.body);
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
}

const getAllProviders = (req:Request, res: Response) => {
    res.send("Get all providers");
}

export const providerController = {
    createProvider,
    getAllProviders
}
