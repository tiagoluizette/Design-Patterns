import templateMethodReadyFile from "./templatemethod.readyfile";

export default class serviceReadyFilePDF extends templateMethodReadyFile {
  constructor() {
    super();
  }

  openFile(): templateMethodReadyFile {
    console.log("Abrir arquivo pdf");

    return this;
  }

  parseFile(): templateMethodReadyFile {
    console.log("Ler conteúdo do arquivo pdf!");

    return this;
  }
}
