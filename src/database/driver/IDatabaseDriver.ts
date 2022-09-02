interface IConfig {
  type?: string | undefined;
  host: string | undefined;
  port?: number;
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
}

interface IDatabaseDriver {
  config: IConfig;

  connect(): Promise<any>;
}

export { IDatabaseDriver, IConfig };
