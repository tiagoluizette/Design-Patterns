export default abstract class templateMethodReadyFile {
  protected _diretorioArquivo: string;

  constructor() {
    console.log(
      "Design Pattern Template Method, é usado para definir o esqueleto de um algoritmo em uma classe base e permitir que as subclasses implementem partes desse algoritmo sem alterar sua estrutura geral."
    );

    console.log("");
  }

  diretorioArquivo(value: string): templateMethodReadyFile {
    this._diretorioArquivo = value;

    return this;
  }

  loadFile(): templateMethodReadyFile {
    console.log("Carregar arquivo " + this._diretorioArquivo);

    return this;
  }

  readyFile(): templateMethodReadyFile {
    this.openFile();
    this.parseFile();

    return this;
  }

  abstract openFile(): templateMethodReadyFile;
  abstract parseFile(): templateMethodReadyFile;
}
