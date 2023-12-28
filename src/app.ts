import express, { Application } from "express";
import { routes } from "./routes";
import { errorMiddleWare } from "./middleware/error.middleware";
import { AppDataSource } from "./database/Orm.confi";
import * as dotenv from 'dotenv';
import "reflect-metadata"; // For Dependency Injection

dotenv.config();

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    AppDataSource
  }

  private routes(): void {
    this.app.use("/", routes);
  }

  public getApp(): Application {
    return this.app;
  }
}

const PORT = process.env.PORT || 3001;

const appInstance = new App();
const app = appInstance.getApp();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
