import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { router } from "./routes";
import swaggerUI from "swagger-ui-express";

import swaggerFile from "./swagger.json";
import { AppDataSource } from "./database";

import "./shared/container";
import { errorHandler } from "./exceptions/ErrorHandler";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

  app.use(router);

  app.use(errorHandler);

  app.listen(3333, () => {
    console.log("Server is running");
  });
});
