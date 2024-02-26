import { iStrategyLogin } from "./stategy.login";

export default class loginJWTStrategy implements iStrategyLogin {
  private _token: string;

  token(value: string): loginJWTStrategy {
    this._token = value;

    return this;
  }

  execute(): iStrategyLogin {
    console.log("Login realizado atravez - JWT!");

    return this;
  }
}
