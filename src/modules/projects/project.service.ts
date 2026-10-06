import { db } from "../../prisma/db.ts";
// goes to/ fetch from database
export async function getAllProjects(onlyFeatured: boolean = false) {
  if (onlyFeatured) {
    return await db.orm.public.Project
      .where({ isFeatured: true })
      .orderBy((p) => p.order.asc())
      .all();
  }

  return await db.orm.public.Project
    .orderBy((p) => p.order.asc())
    .all();
}