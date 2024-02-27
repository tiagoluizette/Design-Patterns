import { marcaCompoutador } from "../enum/enum.marca";
import serviceDellAbstractFactory from "../service/service.dell.abstract.factory";
import serviceSamsungAbstractFactory from "../service/service.samsung.abstract.factory";
import {
  iFactoryMarca,
  iDesktop,
  iNotebook,
} from "../model/interface.abstract.factory";

export default class facadeMarca {
  static instance: facadeMarca;
  private _marca: marcaCompoutador;

  static newFacadeMarca(): facadeMarca {
    if (!this.instance) {
      this.instance = new facadeMarca();
    }

    return this.instance;
  }

  marca(value: marcaCompoutador): facadeMarca {
    this._marca = value;

    return this;
  }

  consultarDadosComputador(): object {
    let factoryMarca: iFactoryMarca;
    let notbook: iNotebook;
    let desktop: iDesktop;

    switch (this._marca) {
      case marcaCompoutador.DELL:
        factoryMarca = new serviceDellAbstractFactory();
        break;

      case marcaCompoutador.Samsung:
        factoryMarca = new serviceSamsungAbstractFactory();
        break;
      default:
        break;
    }

    notbook = factoryMarca.pesquisarNotebook();
    desktop = factoryMarca.pesquisarDesktop();

    return {
      descricaoNotbook: notbook.getDescricao(),
      telaNotbook: notbook.getTamanhoMonitor(),
      memoriaNotbook: notbook.getQuantidadeMemoriaRAM(),
      descricaoDesktop: desktop.getDescricao(),
      hdDesktop: desktop.getCapacidadeHD(),
      processadoDesktop: desktop.getTipoProcessador(),
    };
  }
}
