interface Logger {
  log(param: string): void,
}

class ConsoleLogger implements Logger {
  public log(param: string) {
    console.log('loggerzin', param);
  }
}

class ConsoleLogger2 implements Logger {
  public log(param: string) {
    console.log('Loggerzada', param);
  }
}

interface Database2 {
  logger: Logger;

  save(key: string, value: string): void;
}

class ExampleDatabase implements Database2{
  constructor(public logger: Logger) { }

  public save(key: string, value: string) {
    this.logger.log(`${key}: ${value}`);
  }
}

const logger = new ConsoleLogger2()
const dataBaseEx = new ExampleDatabase(logger);

dataBaseEx.save('nome', 'Erisu');
