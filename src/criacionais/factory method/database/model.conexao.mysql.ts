import conexaoDataBase from "./conexao.database";

export default class conexaoMySQL implements conexaoDataBase {
  constructor() {}

  connect(): conexaoDataBase {
    console.log("conexão com mysql realizada com sucesso!");

    return this;
  }

  disconnect(): conexaoDataBase {
    console.log("conexão com mysql finalizada com sucesso!");

    return this;
  }
}
