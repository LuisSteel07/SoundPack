import { db, DrizzleORM } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const ChangeTitleRoute = Router();

ChangeTitleRoute.post("/title", async (req: Request, res: Response) => {
  try {
    const { id, title } = req.body;

    if (!id || !title) return res.status(404).json({ msg: "Invalid Query" });

    const returning = await db
      .update(PlaylistSchema)
      .set({ title })
      .where(DrizzleORM.eq(PlaylistSchema.id, id))
      .returning();

    if (!returning[0]) return res.status(404).json({ msg: "Bad update title" });

    return res.status(200).json({ msg: "Updated Title" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default ChangeTitleRoute;
