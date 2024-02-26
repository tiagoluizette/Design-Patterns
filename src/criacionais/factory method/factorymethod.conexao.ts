import iConexaoDataBase from "./database/conexao.database";
import conexaoFirebird from "./database/model.conexao.firebird";
import conexaoMySQL from "./database/model.conexao.mysql";
import conexaoPostgreSQL from "./database/model.conexao.postgresql";
import { dataBaseType } from "./utils/enum.database";

export default class factoryMethodConexaoDataBase {
  static instance: factoryMethodConexaoDataBase;
  private _dataBaseType: dataBaseType;

  static newFactoryMethodConexaoDataBase() {
    if (!this.instance) {
      this.instance = new factoryMethodConexaoDataBase();
    }

    return this.instance;
  }

  dataBase(value: dataBaseType): factoryMethodConexaoDataBase {
    this._dataBaseType = value;

    return this;
  }

  getDataBase(): iConexaoDataBase {
    console.log(
      "Factory Method é útil quando você precisa criar objetos dinamicamente sem conhecer a classe de implementação, somente sua interface: o padrão factory estabelece uma forma de desenvolver objetos que são responsáveis pela criação de outros objetos."
    );
    console.log("");

    switch (this._dataBaseType) {
      case dataBaseType.Firebird:
        return new conexaoFirebird();
        break;

      case dataBaseType.MySQL:
        return new conexaoMySQL();
        break;

      case dataBaseType.PostgreSQL:
        return new conexaoPostgreSQL();
        break;

      default:
        return new conexaoMySQL();
    }
  }
}
