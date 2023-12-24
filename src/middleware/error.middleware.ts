import { Request, Response } from "express";
import { logger } from "./log.middleware";

export const errorMiddleWare = (req: Request, res: Response) => {
  logger.error(`Something went wrong `);
  res.send({
    msg: "Something Wrong",
  });
};
