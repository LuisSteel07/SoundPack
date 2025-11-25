import { db } from "db";
import { SourceSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const NewSourceRoute = Router();

NewSourceRoute.post("/new", async (req: Request, res: Response) => {
  try {
    const { src }: { src: string } = req.body;

    if (!src) return res.status(404).json({ msg: "Bad Request" });

    const returning = await db.insert(SourceSchema).values({ src }).returning();

    if (!returning[0])
      return res.status(404).json({ msg: "Error in Inserted Source" });

    return res.status(200).json({ msg: "Inserted Source" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default NewSourceRoute;
