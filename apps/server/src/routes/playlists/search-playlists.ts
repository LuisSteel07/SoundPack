import { db, DrizzleORM } from "db";
import { PlaylistSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const SearchPlaylists = Router();

SearchPlaylists.post("/search", async (req: Request, res: Response) => {
  try {
    const { search } = req.body;

    const matchPlaylists = await db
      .select()
      .from(PlaylistSchema)
      .where(DrizzleORM.like(PlaylistSchema.title, search));

    if (!matchPlaylists[0])
      return res.status(404).json({ msg: "Not playlists founded" });

    return res.status(200).json(matchPlaylists);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default SearchPlaylists;
