import loggerSingleton from "../singleton/service/logger.singleton";

export default function designerPatternSingleton(): void {
  loggerSingleton.newLoggerSingleton().registrarLog("Registro de Log 01");
  loggerSingleton.newLoggerSingleton().registrarLog("Registro de Log 02");
  loggerSingleton.newLoggerSingleton().registrarLog("Registro de Log 03");
  loggerSingleton.newLoggerSingleton().registrarLog("Registro de Log 04");
  loggerSingleton.newLoggerSingleton().registrarLog("Registro de Log 04");
}
