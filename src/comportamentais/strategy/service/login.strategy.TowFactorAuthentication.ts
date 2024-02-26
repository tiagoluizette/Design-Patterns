import { iStrategyLogin } from "./stategy.login";

export default class loginTwoFactorAuthenticationStrategy
  implements iStrategyLogin
{
  private _pin: string;

  pin(value: string): loginTwoFactorAuthenticationStrategy {
    this._pin = value;

    return this;
  }

  execute(): iStrategyLogin {
    console.log("Login realizado atravez - Two Factor Authentication!");

    return this;
  }
}
