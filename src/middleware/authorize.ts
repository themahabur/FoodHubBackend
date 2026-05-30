import { NextFunction, Request, Response } from "express";
import { Roles } from "../types/roles.type";
import { auth } from "../lib/auth";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: Roles;
        emailVerified: boolean;
      };
    }
  }
}

const authorize = (...roles: Roles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = await auth.api.getSession({
        headers: req.headers,
      });

      console.log("Session:", session);

      if (!session || !session.user) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized!",
        });
      }

      req.user = {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role as Roles,
        emailVerified: session.user.emailVerified,
      };

      if (roles.length &&  !roles.includes(req.user.role)) {
        return res.status(401).json({
          success: false,
          message: "You do not have permission to access this resource!",
        });
      }

      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  };
};

export default authorize;
