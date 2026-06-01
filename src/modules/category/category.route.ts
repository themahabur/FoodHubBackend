import { Router } from "express";
import { categoryController } from "./category.controller";
import authorize from "../../middleware/authorize";


const categoryRoutes = Router()

categoryRoutes.get("/" , categoryController.getCategorys)
categoryRoutes.post("/" , authorize("ADMIN", "PROVIDER") , categoryController.createCategory)

export default categoryRoutes;