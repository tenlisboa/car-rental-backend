import path from "path";
import { DataSource } from "typeorm";
const appDir = path.dirname(require.main!.filename);

const AppDataSource = new DataSource({
  type: (process.env.DB_DRIVER as "postgres") || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "sample",
  password: process.env.DB_PASSWORD || "longpassword",
  database: process.env.DB_DATABASE || "rental",
  migrations: [path.resolve(appDir, "src", "database", "migrations")],
});

export { AppDataSource };
