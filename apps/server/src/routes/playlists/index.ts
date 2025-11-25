import { Router } from "express";
import GetPlaylists from "./get-playlists";
import SearchPlaylists from "./search-playlists";
import CreatePlaylist from "./create-playlist";
import DeletePlaylist from "./delete-playlist";

const PlaylistRoute = Router();

PlaylistRoute.use("/playlist", GetPlaylists);
PlaylistRoute.use("/playlist", SearchPlaylists);
PlaylistRoute.use("/playlist", CreatePlaylist);
PlaylistRoute.use("/playlist", DeletePlaylist);

export default PlaylistRoute;
