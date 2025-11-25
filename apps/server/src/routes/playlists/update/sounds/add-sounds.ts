import { db, DrizzleORM } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const AddSoundsRoute = Router();

AddSoundsRoute.post("/add", async (req: Request, res: Response) => {
  try {
    const { id, new_sounds }: { id: number; new_sounds: string } = req.body;

    if (!id || !new_sounds)
      return res.status(404).json({ msg: "Invalid Query" });

    const matchPlaylist = await db
      .select()
      .from(PlaylistSchema)
      .where(DrizzleORM.eq(PlaylistSchema.id, id));

    if (!matchPlaylist[0])
      return res.status(404).json({ msg: "Playlist to update not found" });

    const actual_sounds: Array<number> = JSON.parse(matchPlaylist[0].sounds);
    const new_sounds_parse: Array<number> = JSON.parse(new_sounds);

    const returning = await db
      .update(PlaylistSchema)
      .set({ sounds: JSON.stringify([...actual_sounds, ...new_sounds_parse]) })
      .where(DrizzleORM.eq(PlaylistSchema.id, id))
      .returning();

    if (!returning[0]) return res.status(404).json({ msg: "Bad update title" });

    return res.status(200).json({ msg: "Updated Title" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default AddSoundsRoute;
