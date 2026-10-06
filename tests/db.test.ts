import { describe, it, expect, afterAll } from "vitest";
import { db } from "../src/prisma/db.ts";

describe("Phase 1: Supabase & Prisma 8 Database Layer", () => {
  afterAll(async () => {
    // Always close the connection pool after tests finish so the process exits cleanly
    await db.close();
  });

  it("should fetch all 6 seeded projects ordered by display order", async () => {
    const projects = await db.orm.public.Project.orderBy((p) => p.order.asc()).all();

    expect(projects).toHaveLength(6);
    expect(projects[0].title).toBe("AI-Powered Blogging Platform");
    expect(projects[0].isFeatured).toBe(true);
    expect(projects[1].title).toBe("Swipe-Based Behavioral 2FA System");
  });

  it("should fetch all 3 seeded experiences in chronological order", async () => {
    const experiences = await db.orm.public.Experience.orderBy((e) => e.order.asc()).all();

    expect(experiences).toHaveLength(3);
    expect(experiences[0].company).toBe("HYPE Dhaka");
    expect(experiences[2].company).toBe("Sobeys Inc.");
  });
});