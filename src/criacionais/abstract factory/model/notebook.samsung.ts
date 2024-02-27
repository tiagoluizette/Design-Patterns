import { iNotebook } from "./interface.abstract.factory";

export default class notbookSamsungGalaxyBook3 implements iNotebook {
  getQuantidadeMemoriaRAM(): string {
    return "8GB DD3";
  }

  getTamanhoMonitor(): string {
    return "14 polegadas";
  }

  getDescricao(): string {
    return "Notbook Samsung Galaxy Book3";
  }
}
