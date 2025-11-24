import express, { type Request, type Response } from "express";

const PORT = 3001;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "dog" });
});

app.listen(PORT, "0.0.0.0", (error) => {
  if (error) console.log(`Error in start server ${error}`);
  console.log(`Server on port http://localhost:${PORT}`);
});
