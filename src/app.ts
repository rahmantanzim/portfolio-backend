import express, { Request, Response } from "express";
import cors from "cors";
import projectRoutes from "./modules/projects/project.routes.ts";

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Portfolio API is running",
  });
});

// API Routes
app.use('/api/projects', projectRoutes)

export default app;