import { Router } from "express";
import { providerController } from "./provider.controller";
import authorize from "../../middleware/authorize";


const providerRoute = Router();

providerRoute.get("/", authorize("ADMIN", "PROVIDER"), providerController.getAllProviders);
providerRoute.post("/", authorize("ADMIN" , "PROVIDER"), providerController.createProvider);


export default providerRoute;