interface iBuilder<T> {
  builder(): T;
}

interface dadosFatura {
  nomePessoa: string;
  telefonePessoa: string;
  dataVencimento: Date;
  valorFatura: number;
}

class modelFatura {
  dataVencimento: Date;
  nomePessoa: string;
  telefonePessoa: string;
  valorFatura: number;

  constructor(value: dadosFatura) {
    this.nomePessoa = value.nomePessoa;
    this.dataVencimento = value.dataVencimento;
    this.telefonePessoa = value.telefonePessoa;
    this.valorFatura = value.valorFatura;
  }
}

export default class builderFatura implements iBuilder<modelFatura> {
  static instance: builderFatura;
  private _dataVencimento: Date;
  private _nomePessoa: string;
  private _telefonePessoa: string;
  private _valorFatura: number;

  private constructor() {}

  static newBuilderFatura(): builderFatura {
    if (!this.instance) {
      this.instance = new builderFatura();
    }

    return this.instance;
  }

  nomePessoa(value: string): builderFatura {
    this._nomePessoa = value;

    return this;
  }

  telefonePessoa(value: string): builderFatura {
    this._telefonePessoa = value;

    return this;
  }

  dataVencimento(value: Date): builderFatura {
    this._dataVencimento = value;

    return this;
  }

  valorFatura(value: number): builderFatura {
    this._valorFatura = value;

    return this;
  }

  builder(): modelFatura {
    let fatura: dadosFatura = {
      nomePessoa: this._nomePessoa,
      telefonePessoa: this._telefonePessoa,
      dataVencimento: this._dataVencimento,
      valorFatura: this._valorFatura,
    };

    return new modelFatura(fatura);
  }
}
