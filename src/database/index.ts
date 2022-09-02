import { DatabaseDriver } from "./driver/DatabaseDriver";

function connectDatabase() {
  const driver = new DatabaseDriver({
    type: process.env.DB_DRIVER as "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  return driver.connect();
}

export { connectDatabase };
