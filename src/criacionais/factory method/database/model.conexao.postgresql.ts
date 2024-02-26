import conexaoDataBase from "./conexao.database";

export default class conexaoPostgreSQL implements conexaoDataBase {
  constructor() {}

  connect(): conexaoDataBase {
    console.log("conexão com PostgreSQL realizada com sucesso!");

    return this;
  }

  disconnect(): conexaoDataBase {
    console.log("conexão com PostgreSQL finalizada com sucesso!");

    return this;
  }
}
