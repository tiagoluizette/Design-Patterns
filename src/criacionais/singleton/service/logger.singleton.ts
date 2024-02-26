export default class loggerSingleton {
  static instance: loggerSingleton;
  public log: string[] = [];

  private constructor() {
    /*metodo definido como private para não permitir que seje instânciado mais de uma instância da mesma classe, 
      pois se isso ocorrer perde todo sentido de utilizar esse Design Patterns */
  }

  static newLoggerSingleton(): loggerSingleton {
    if (!this.instance) {
      this.instance = new loggerSingleton();

      console.log(
        "O padrão de projeto Singleton tem o propósito de fornecer um ponto único de acesso à instância de um objeto, de modo que qualquer local da aplicação consiga acessá-lo."
      );

      console.log("");
      console.log("Classe instanciada uma única vez...");
      console.log("");
    }

    return this.instance;
  }

  registrarLog(value: string): loggerSingleton {
    let menssageLog: string = value + " - " + new Date();

    this.log.push(menssageLog);

    console.log(menssageLog);

    return this;
  }
}
