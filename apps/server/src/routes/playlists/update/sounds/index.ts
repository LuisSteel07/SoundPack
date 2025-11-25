import { Router } from "express";
import AddSoundsRoute from "./add-sounds";
import RemoveSoundsRoute from "./remove-sounds";

const PlaylistSoundsRoute = Router();

PlaylistSoundsRoute.use("/sounds", AddSoundsRoute);
PlaylistSoundsRoute.use("/sounds", RemoveSoundsRoute);

export default PlaylistSoundsRoute;
