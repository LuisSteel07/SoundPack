import { db, DrizzleORM } from "db";
import { SourceSchema } from "db/src/schemas";
import { Router, type Request, type Response } from "express";

const DeleteSourceRoute = Router();

DeleteSourceRoute.post("/delete", async (req: Request, res: Response) => {
  try {
    const { id }: { id: number } = req.body;

    if (!id) return res.status(404).json({ msg: "Bad Request" });

    const returning = await db
      .delete(SourceSchema)
      .where(DrizzleORM.eq(SourceSchema.id, id))
      .returning();

    if (!returning[0])
      return res.status(404).json({ msg: "Error in Delete Source" });

    return res.status(200).json({ msg: "Deleted Source" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default DeleteSourceRoute;
