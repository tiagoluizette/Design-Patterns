export interface iCommand {
  execute(): iCommand;
}

export interface iInvoker {
  add(value: iCommand): iInvoker;
  execute(): iInvoker;
}
