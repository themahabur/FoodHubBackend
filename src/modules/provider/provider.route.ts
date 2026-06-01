import { Router } from "express";
import { providerController } from "./provider.controller";
import authorize from "../../middleware/authorize";


const providerRoutes= Router();

providerRoutes.get("/", authorize("ADMIN", "PROVIDER"), providerController.getAllProviders);
providerRoutes.post("/", authorize("ADMIN" , "PROVIDER"), providerController.createProvider);


export default providerRoutes;