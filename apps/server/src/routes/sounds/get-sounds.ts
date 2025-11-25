import { Router, type Request, type Response } from "express";
import { db } from "db";
import { SoundSchema } from "db/src/schemas";

const GetSounds = Router();

GetSounds.get("/get", async (req: Request, res: Response) => {
  try {
    const sounds = await db.select().from(SoundSchema);

    return res.json({ sounds });
  } catch (err) {
    return res.json({ msg: err });
  }
});

export default GetSounds;
