import iProxyConsultaCEP from "./interface.proxy";
import { serviceConsultaCEPSubjec } from "./service/service.consultacep";
import { DTOCep } from "./DTO.Cep";

export default class proxyConsultaCEP implements iProxyConsultaCEP {
  static instance: proxyConsultaCEP;
  private serviceConsultaCep: serviceConsultaCEPSubjec;

  constructor() {
    this.serviceConsultaCep =
      serviceConsultaCEPSubjec.newServiceConsultaCEPSubjec();
  }

  private listaCEP: DTOCep[] = [
    {
      cep: "01002-000",
      logradouro: "Rua Direita",
      complemento: "lado par",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    },
    {
      cep: "01003-000",
      logradouro: "Rua José Bonifácio",
      complemento: "lado par",
      bairro: "Sé",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    },
    {
      cep: "03001-000",
      logradouro: "Avenida Rangel Pestana",
      complemento: "de 501 ao fim - lado ímpar",
      bairro: "Brás",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    },
    {
      cep: "05001-000",
      logradouro: "Avenida Francisco Matarazzo",
      complemento: "até 1071/1072",
      bairro: "Água Branca",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    },
  ];

  static newProxyConsultaCEP() {
    if (!this.instance) {
      console.log(
        "O Proxy é um padrão de projeto estrutural que permite que você forneça um substituto ou um espaço reservado para outro objeto. Um proxy controla o acesso ao objeto original, permitindo que você faça algo ou antes ou depois do pedido chegar ao objeto original."
      );
      console.log("");

      this.instance = new proxyConsultaCEP();
    }

    return this.instance;
  }

  consultaCEP(value: string): DTOCep {
    if (value.trim() == "") {
      throw new Error("CEP não foi informado!");
    }

    let cep = this.listaCEP.find((itemCEP) => itemCEP.cep === value);

    if (!cep) {
      console.log("");
      console.log("CEP " + value + " não foi encontrado no proxy...");

      cep = this.serviceConsultaCep.consultaCEP(value);

      if (!cep) {
        throw new Error("CEP " + value + " não foi encontrado!");
      } else {
        this.listaCEP.push(cep);

        console.log("");
        console.log("CEP " + value + " foi adicionado ao proxy...");
        console.log("");
      }
    } else {
      console.log("");
      console.info("CEP " + value + " foi encontrado no proxy...");
      console.log("");
    }

    return cep;
  }
}
