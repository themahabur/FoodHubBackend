import { Router } from "express";
import providerRoute from "../modules/provider/provider.route";

const routes = Router();

routes.use("/providers", providerRoute);

export default routes;