import { Router } from "express";
import helloRoute from "./routes/hello.route";

export const routes = Router();

routes.use("/", helloRoute);