import express from "express";
import SoundsRoute from "./routes/sounds";
import PlaylistRoute from "./routes/playlists";
import dotenv from "dotenv";
import SourcesRoute from "./routes/sources";
dotenv.config();

const app = express();

app.use(express.json());
app.use(SoundsRoute);
app.use(PlaylistRoute);
app.use(SourcesRoute);

app.listen(process.env.DEFAULT_PORT!, (error) => {
  if (error) console.log(`Error in start server ${error}`);
  console.log(`Server on port http://localhost:${process.env.DEFAULT_PORT!}`);
});
