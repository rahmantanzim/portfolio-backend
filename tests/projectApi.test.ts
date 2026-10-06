import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import app from "../src/app.ts";
import { db } from "../src/prisma/db.ts";

describe("GET /api/projects Endpoint", () => {
  afterAll(async () => {
    await db.close();
  });

  it("should return 200 OK and all 6 projects sorted by order", async () => {
    const res = await request(app).get("/api/projects");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.count).toBe(6);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data[0].title).toBe("AI-Powered Blogging Platform");
    expect(res.body.data[1].title).toBe("Swipe-Based Behavioral 2FA System");
  });

  it("should return only featured projects when ?featured=true is passed", async () => {
    const res = await request(app).get("/api/projects?featured=true");

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(
      res.body.data.every(
        (project: { isFeatured: boolean }) => project.isFeatured === true
      )
    ).toBe(true);
  });
});