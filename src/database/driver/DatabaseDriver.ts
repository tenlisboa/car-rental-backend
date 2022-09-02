import { DataSource, DataSourceOptions } from "typeorm";
import { IDatabaseDriver } from "./IDatabaseDriver";

class DatabaseDriver implements IDatabaseDriver<DataSourceOptions> {
  config: DataSourceOptions;

  constructor(config: DataSourceOptions) {
    this.config = config;
  }

  async connect(): Promise<DataSource> {
    const dataSource = new DataSource(this.config);

    return await dataSource.initialize();
  }
}

export { DatabaseDriver };
