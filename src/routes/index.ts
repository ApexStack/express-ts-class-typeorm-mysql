import { Router } from "express";
import helloRoute from "./hello.route";

export const routes = Router();

routes.use("/", helloRoute);