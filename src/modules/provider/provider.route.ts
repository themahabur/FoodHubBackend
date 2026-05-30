import { Router } from "express";
import { providerController } from "./provider.controller";


const providerRoute = Router();

providerRoute.get("/", providerController.getAllProviders);


export default providerRoute;