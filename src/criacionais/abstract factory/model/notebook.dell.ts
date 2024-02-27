import { iNotebook } from "./interface.abstract.factory";

export default class notbookDellLatitude implements iNotebook {
  getQuantidadeMemoriaRAM(): string {
    return "16GB DD4";
  }

  getTamanhoMonitor(): string {
    return "15.6 polegadas";
  }

  getDescricao(): string {
    return "Notbook Dell Latitude";
  }
}
