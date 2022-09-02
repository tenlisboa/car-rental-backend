import { DataSource, DataSourceOptions } from "typeorm";
import { IConfig, IDatabaseDriver } from "./IDatabaseDriver";

class DatabaseDriver implements IDatabaseDriver {
  config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  async connect(): Promise<DataSource> {
    const dataSource = new DataSource(this.config as DataSourceOptions);

    return await dataSource.initialize();
  }
}

export { DatabaseDriver };
