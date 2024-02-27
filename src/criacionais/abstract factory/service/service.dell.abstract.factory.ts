import {
  iDesktop,
  iFactoryMarca,
  iNotebook,
} from "../model/interface.abstract.factory";
import desktopDellVostroSmall from "../model/desktop.dell";
import notbookDellLatitude from "../model/notebook.dell";

export default class serviceDellAbstractFactory implements iFactoryMarca {
  pesquisarDesktop(): iDesktop {
    return new desktopDellVostroSmall();
  }

  pesquisarNotebook(): iNotebook {
    return new notbookDellLatitude();
  }
}
