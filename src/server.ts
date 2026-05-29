import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 5000;

const server = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });

    app.get("api/v1/ping", (req, res) => {
      res.status(200).json({ message: "pong" });
    });
  } catch (error) {
    await prisma.$disconnect();
    console.error("Error starting server:", error);
  }
};

server();
