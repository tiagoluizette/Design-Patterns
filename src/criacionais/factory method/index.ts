import iConexaoDataBase from "./database/conexao.database";
import factoryMethodConexaoDataBase from "./factorymethod.conexao";
import { dataBaseType } from "./utils/enum.database";

export default function designerPatternFactoryMethod(): void {
  let conexao: iConexaoDataBase = factoryMethodConexaoDataBase
    .newFactoryMethodConexaoDataBase()
    .dataBase(dataBaseType.PostgreSQL)
    .getDataBase()
    .connect();
}
