import { iDesktop } from "./interface.abstract.factory";

export default class desktopDellVostroSmall implements iDesktop {
  getCapacidadeHD(): string {
    return "1TB";
  }

  getTipoProcessador(): string {
    return "i7 12ª Geração";
  }

  getDescricao(): string {
    return "Desktop Dell Vostro Small";
  }
}
