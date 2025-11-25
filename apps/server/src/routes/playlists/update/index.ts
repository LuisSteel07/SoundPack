import { Router } from "express";
import ChangeTitleRoute from "./change-title";
import PlaylistSoundsRoute from "./sounds";

const UpdatePlaylistRoute = Router();

UpdatePlaylistRoute.use("/update", ChangeTitleRoute);
UpdatePlaylistRoute.use("/update", PlaylistSoundsRoute);

export default UpdatePlaylistRoute;
