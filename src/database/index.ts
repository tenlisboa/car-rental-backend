import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1662203203498 } from "./migrations/1662203203498-CreateCategories";

const AppDataSource = new DataSource({
  type: (process.env.DB_DRIVER as "postgres") || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "sample",
  password: process.env.DB_PASSWORD || "longpassword",
  database: process.env.DB_DATABASE || "rental",
  entities: [Category],
  migrations: [CreateCategories1662203203498],
});

export { AppDataSource };
