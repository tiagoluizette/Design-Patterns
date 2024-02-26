import { iStrategyLogin } from "./stategy.login";

export default class loginCredentialsStrategy implements iStrategyLogin {
  private _userName: string;
  private _password: string;

  userName(value: string): loginCredentialsStrategy {
    this._userName = value;

    return this;
  }

  password(value: string): loginCredentialsStrategy {
    this._password = value;

    return this;
  }

  execute(): iStrategyLogin {
    console.log("Login realizado atravez - Credentials!");

    return this;
  }
}
