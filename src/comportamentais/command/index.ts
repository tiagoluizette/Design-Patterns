import serviceBackupFTP from "./service/service.backup.FTP";
import serviceBackupLocal from "./service/service.backup.local";
import serviceBackupStorageAPI from "./service/service.backup.storageAPI";
import modelInvoker from "./model/model.invoker";

export default function designerPatternCommand(): void {
  console.log(
    "O objetivo do Command, é encapsular uma solicitação como um objeto independente. Esse objeto encapsulado contém toda a informação necessária para executar uma ação ou acionar um evento em um momento posterior. Pode se adicionar uma lista de ações para ser executado posteriormente."
  );
  console.log("");

  modelInvoker
    .newModelInvoker()
    .add(new serviceBackupLocal())
    .add(new serviceBackupFTP())
    .add(new serviceBackupStorageAPI())
    .execute();
}
