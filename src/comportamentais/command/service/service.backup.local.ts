import { iCommand } from "../model/interface.command";

export default class serviceBackupLocal implements iCommand {
  execute(): iCommand {
    console.log("Backup local realizado com sucesso!!!");

    return this;
  }
}
