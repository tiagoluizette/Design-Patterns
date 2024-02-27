import { iCommand } from "../model/interface.command";

export default class serviceBackupFTP implements iCommand {
  execute(): iCommand {
    console.log("Backup FTP realizado com sucesso!!!");

    return this;
  }
}
