import { db, DrizzleORM } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const RemoveSoundsRoute = Router();

RemoveSoundsRoute.post("/remove", async (req: Request, res: Response) => {
  try {
    const { id, delete_sounds }: { id: number; delete_sounds: string } =
      req.body;

    if (!id || !delete_sounds)
      return res.status(404).json({ msg: "Invalid Query" });

    const matchPlaylist = await db
      .select()
      .from(PlaylistSchema)
      .where(DrizzleORM.eq(PlaylistSchema.id, id));

    if (!matchPlaylist[0])
      return res.status(404).json({ msg: "Playlist to update not found" });

    const actual_sounds: Array<number> = JSON.parse(matchPlaylist[0].sounds);
    const delete_sounds_parse: Array<number> = JSON.parse(delete_sounds);

    actual_sounds.map((actualSound, actual_index) => {
      delete_sounds_parse.map((deleteSound, delete_index) => {
        if (actualSound == deleteSound) {
          actual_sounds.splice(actual_index, 1);
          delete_sounds_parse.splice(delete_index, 1);
        }
      });
    });

    const returning = await db
      .update(PlaylistSchema)
      .set({ sounds: JSON.stringify(actual_sounds) })
      .where(DrizzleORM.eq(PlaylistSchema.id, id))
      .returning();

    if (!returning[0]) return res.status(404).json({ msg: "Bad update title" });

    return res.status(200).json({ msg: "Updated Title" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default RemoveSoundsRoute;
