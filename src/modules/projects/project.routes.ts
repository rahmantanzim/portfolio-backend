import { Router } from "express";
import * as projectController from "./project.controller.ts";

const router = Router();

// Maps to GET /api/projects
router.get("/", projectController.getProjects);

export default router;