import express, { type Request, type Response } from "express";
import SoundsRoute from "./routes/sounds";

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(SoundsRoute);

app.listen(PORT, (error) => {
  if (error) console.log(`Error in start server ${error}`);
  console.log(`Server on port http://localhost:${PORT}`);
});
