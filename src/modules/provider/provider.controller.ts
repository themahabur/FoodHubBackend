import { Request, Response } from "express";


const createProvider = (req:Request, res: Response) => {
    res.send("Create provider");
}

const getAllProviders = (req:Request, res: Response) => {
    res.send("Get all providers");
}

export const providerController = {
    createProvider,
    getAllProviders
}
