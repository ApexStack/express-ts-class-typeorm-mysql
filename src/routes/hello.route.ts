import express from "express";
import HelloController from "../controllers/hello.controller";

const helloRoute = express.Router();

helloRoute.get("/", HelloController.get);

export default helloRoute;
