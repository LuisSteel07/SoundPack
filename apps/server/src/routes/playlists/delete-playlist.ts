import { db, DrizzleORM } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const DeletePlaylist = Router();

DeletePlaylist.post("/delete", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deletePlaylist = await db
      .delete(PlaylistSchema)
      .where(DrizzleORM.eq(PlaylistSchema.title, id)).returning();

    if (!deletePlaylist[0])
      return res.status(404).json({ msg: "Not playlists founded" });

    return res.status(200).json(deletePlaylist[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default DeletePlaylist;
