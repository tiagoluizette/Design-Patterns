import { enumFileType } from "./enum/enum.file";
import serviceReadyFilePDF from "./service/service.readyfile.pdf";
import serviceReadyFileTXT from "./service/service.readyfile.txt";
import serviceReadyFileXML from "./service/service.readyfile.xml";

export default function designerPatternTemplateMethod(
  value: enumFileType
): void {
  switch (value) {
    case enumFileType.TXT:
      new serviceReadyFileTXT()
        .diretorioArquivo(__dirname + "arquivoTXT.txt")
        .loadFile()
        .readyFile();
      break;

    case enumFileType.PDF:
      new serviceReadyFilePDF()
        .diretorioArquivo(__dirname + "arquivoPDF.pdf")
        .loadFile()
        .readyFile();
      break;

    case enumFileType.XML:
      new serviceReadyFileXML()
        .diretorioArquivo(__dirname + "arquivoXML.xml")
        .loadFile()
        .readyFile();
      break;

    default:
      console.log("Tipo de arquivo não foi informado!");
      break;
  }
}
