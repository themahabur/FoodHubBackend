import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use("/api/v1", routes);

app.use("/api/auth/sign-up/email", (req, res) => {
  return res.status(403).json({
    message: "Use /api/users/register",
  });
});

app.all("/api/auth/*splat", toNodeHandler(auth));



export default app;
