interface IDatabaseDriver<ConfigType> {
  config: ConfigType;

  connect(): Promise<any>;
}

export { IDatabaseDriver };
