import { iCommand, iInvoker } from "../model/interface.command";

export default class modelInvoker implements iInvoker {
  static instance: modelInvoker;
  private listCommand: iCommand[] = [];

  static newModelInvoker(): modelInvoker {
    if (!this.instance) {
      this.instance = new modelInvoker();
    }

    return this.instance;
  }

  add(value: iCommand): iInvoker {
    this.listCommand.push(value);

    return this;
  }

  execute(): iInvoker {
    this.listCommand.map((command) => {
      command.execute();
    });

    return this;
  }
}
