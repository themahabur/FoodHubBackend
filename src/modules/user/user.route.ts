import { Router } from "express";
import { userController } from "./user.controller";
import authorize from "../../middleware/authorize";

const userRoutes = Router();

userRoutes.get("/",authorize("ADMIN") , userController.getAllUsers);
userRoutes.get("/:id",authorize("ADMIN") , userController.getUsersById);
userRoutes.patch("/:id",authorize("ADMIN", "CUSTOMER") , userController.updateUser);

export default userRoutes;

