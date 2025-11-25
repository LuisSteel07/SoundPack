import { db, DrizzleORM } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const CreatePlaylist = Router();

CreatePlaylist.post("/create", async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    // Temp values
    const cover = "Example//Route"
    const sounds: Array<number> = [] 

    const matchPlaylists = await db.insert(PlaylistSchema).values({
        title,
        cover,
        sounds: JSON.stringify(sounds)
    }).returning()

    if (!matchPlaylists[0])
      return res.status(404).json({ msg: "Not playlist inserted" });

    return res.status(200).json(matchPlaylists);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default CreatePlaylist;
