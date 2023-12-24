import { Request, Response } from "express";
import HelloService from "../services/hello.service";
import { Container } from "typedi";

class HelloController {
  static get(req: Request, res: Response): void {
    const data = Container.get(HelloService).fetchData();
    res.json({ message: `${data}` });
  }
}

export default HelloController;
