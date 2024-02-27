import {
  iDesktop,
  iFactoryMarca,
  iNotebook,
} from "../model/interface.abstract.factory";
import desktopSamsungGalaxyBook3 from "../model/desktop.samsung";
import notbookSamsungGalaxyBook3 from "../model/notebook.samsung";

export default class serviceSamsungAbstractFactory implements iFactoryMarca {
  pesquisarDesktop(): iDesktop {
    return new desktopSamsungGalaxyBook3();
  }

  pesquisarNotebook(): iNotebook {
    return new notbookSamsungGalaxyBook3();
  }
}
