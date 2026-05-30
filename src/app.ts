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

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/v1", routes);

export default app;
