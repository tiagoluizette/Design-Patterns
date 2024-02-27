import { iCommand } from "../model/interface.command";

export default class serviceBackupStorageAPI implements iCommand {
  execute(): iCommand {
    console.log("Backup Storage API realizado com sucesso!!!");

    return this;
  }
}
