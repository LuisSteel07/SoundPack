import { Router } from "express";
import GetSounds from "./get-sounds";
import SearchSounds from "./search-sounds";

const SoundsRoute = Router();

SoundsRoute.use("/sounds", GetSounds);
SoundsRoute.use("/sounds", SearchSounds);

export default SoundsRoute;
