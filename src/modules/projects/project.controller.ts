import { Request, Response, NextFunction } from "express";
import * as projectService from "./project.service.ts";

export async function getProjects(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Check if the URL has ?featured=true
    const onlyFeatured = req.query.featured === "true";
    const projects = await projectService.getAllProjects(onlyFeatured);

    res.status(200).json({
      status: "ok",
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    // Passes any unexpected database errors to Express error handling
    next(error);
  }
}