import templateMethodReadyFile from "./templatemethod.readyfile";

export default class serviceReadyFileTXT extends templateMethodReadyFile {
  constructor() {
    super();
  }

  openFile(): templateMethodReadyFile {
    console.log("Abrir arquivo txt");

    return this;
  }

  parseFile(): templateMethodReadyFile {
    console.log("Ler conteúdo do arquivo txt!");

    return this;
  }
}
