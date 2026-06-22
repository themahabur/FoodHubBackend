import { Router } from "express";
import { providerController } from "./provider.controller";
import authorize from "../../middleware/authorize";


const providerRoutes= Router();

providerRoutes.get("/all",  providerController.getAllProviders);
providerRoutes.get("/", authorize( "PROVIDER"), providerController.getProviderById);
providerRoutes.post("/", authorize( "PROVIDER"), providerController.createProvider);


export default providerRoutes;