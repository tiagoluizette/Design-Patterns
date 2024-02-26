import { DTOCep } from "../DTO.Cep";
import iProxyConsultaCEP from "../interface.proxy";

export class serviceConsultaCEPSubjec implements iProxyConsultaCEP {
  static instance: serviceConsultaCEPSubjec;

  static newServiceConsultaCEPSubjec() {
    if (!this.instance) {
      this.instance = new serviceConsultaCEPSubjec();
    }

    return this.instance;
  }

  consultaCEP(value: string): DTOCep {
    return {
      cep: "01001-000",
      logradouro: "Praça da Sé",
      complemento: "lado ímpar",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    };
  }
}
