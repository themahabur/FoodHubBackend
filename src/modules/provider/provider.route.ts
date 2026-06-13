import { Router } from "express";
import { providerController } from "./provider.controller";
import authorize from "../../middleware/authorize";


const providerRoutes= Router();

providerRoutes.get("/",  providerController.getAllProviders);
providerRoutes.get("/:id",  providerController.getProviderById);
providerRoutes.post("/", authorize( "PROVIDER"), providerController.createProvider);


export default providerRoutes;