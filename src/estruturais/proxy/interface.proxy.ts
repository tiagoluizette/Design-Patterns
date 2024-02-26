import { DTOCep } from "./DTO.Cep";

export default interface iProxyConsultaCEP {
  consultaCEP(value: string): DTOCep;
}
