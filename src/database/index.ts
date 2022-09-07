import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1662203203498 } from "./migrations/1662203203498-CreateCategories";
import { CreateSpecifications1662509109492 } from "./migrations/1662509109492-CreateSpecifications";

const AppDataSource = new DataSource({
  type: (process.env.DB_DRIVER as "postgres") || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "sample",
  password: process.env.DB_PASSWORD || "longpassword",
  database: process.env.DB_DATABASE || "rental",
  entities: [Category, Specification],
  migrations: [
    CreateCategories1662203203498,
    CreateSpecifications1662509109492,
  ],
});

export { AppDataSource };
