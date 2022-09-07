import { DataSource } from "typeorm";
import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1662203203498 } from "./migrations/1662203203498-CreateCategories";
import { CreateSpecifications1662509109492 } from "./migrations/1662509109492-CreateSpecifications";
import { CreateUsers1662560238368 } from "./migrations/1662560238368-CreateUsers";

const AppDataSource = new DataSource({
  type: (process.env.DB_DRIVER as "postgres") || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "sample",
  password: process.env.DB_PASSWORD || "longpassword",
  database: process.env.DB_DATABASE || "rental",
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories1662203203498,
    CreateSpecifications1662509109492,
    CreateUsers1662560238368,
  ],
});

export { AppDataSource };
