import { Router, type Request, type Response } from "express";
import { db, DrizzleORM } from "db";
import { SoundSchema } from "db/src/schemas";

const SearchSounds = Router();

SearchSounds.post("/search", async (req: Request, res: Response) => {
  try {
    const { search } = req.body;

    if (!search[0]) return res.status(404).json({ msg: "Invalid query..." });

    const matchSounds = await db
      .select()
      .from(SoundSchema)
      .where(DrizzleORM.like(SoundSchema.title, search));

    if (!matchSounds[0])
      return res.status(404).json({ msg: "Sound not found..." });

    return res.status(200).json({ matchSounds });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default SearchSounds;
