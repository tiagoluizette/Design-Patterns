import templateMethodReadyFile from "./templatemethod.readyfile";

export default class serviceReadyFileXML extends templateMethodReadyFile {
  openFile(): templateMethodReadyFile {
    console.log("Abrir arquivo xml");

    return this;
  }

  parseFile(): templateMethodReadyFile {
    console.log("Ler conteúdo do arquivo xml");

    return this;
  }
}
