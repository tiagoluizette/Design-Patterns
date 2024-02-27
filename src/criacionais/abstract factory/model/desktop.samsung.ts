import { iDesktop } from "./interface.abstract.factory";

export default class desktopSamsungGalaxyBook3 implements iDesktop {
  getCapacidadeHD(): string {
    return "2TB";
  }

  getTipoProcessador(): string {
    return "i9 1ª Geração";
  }

  getDescricao(): string {
    return "Desktop Samsung Galaxy Book3";
  }
}
