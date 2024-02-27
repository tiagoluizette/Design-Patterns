export interface iNotebook {
  getTamanhoMonitor(): string;
  getQuantidadeMemoriaRAM(): string;
  getDescricao(): string;
}

export interface iDesktop {
  getTipoProcessador(): string;
  getCapacidadeHD(): string;
  getDescricao(): string;
}

export interface iFactoryMarca {
  pesquisarNotebook(): iNotebook;
  pesquisarDesktop(): iDesktop;
}
