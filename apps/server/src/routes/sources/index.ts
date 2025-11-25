import { Router } from "express";
import NewSourceRoute from "./new-source";
import DeleteSourceRoute from "./delete-source";

const SourcesRoute = Router();

SourcesRoute.use("/source", NewSourceRoute);
SourcesRoute.use("/source", DeleteSourceRoute);

export default SourcesRoute;
