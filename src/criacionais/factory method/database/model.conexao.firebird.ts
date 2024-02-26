import conexaoDataBase from "./conexao.database";

export default class conexaoFirebird implements conexaoDataBase {
  constructor() {}

  connect(): conexaoDataBase {
    console.log("conexão com Firebird realizada com sucesso!");

    return this;
  }

  disconnect(): conexaoDataBase {
    console.log("conexão com Firebird finalizada com sucesso!");

    return this;
  }
}
