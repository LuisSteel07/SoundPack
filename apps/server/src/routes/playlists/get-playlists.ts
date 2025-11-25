import { db } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const GetPlaylists = Router();

GetPlaylists.get("/get", async (req: Request, res: Response) => {
  try {
    const playlists = await db.select().from(PlaylistSchema);

    if (!playlists[0]) return res.status(404).json({ msg: "No playlists save" });

    return res.status(200).json(playlists);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default GetPlaylists;
