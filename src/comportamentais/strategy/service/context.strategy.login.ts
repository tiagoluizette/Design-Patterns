import { loginType } from "../enum/enum.typeLogin";
import loginTwoFactorAuthenticationStrategy from "./login.strategy.TowFactorAuthentication";
import loginCredentialsStrategy from "./login.strategy.credentials";
import loginJWTStrategy from "./login.strategy.jwt";

export default class contextStrategyLogin {
  static instance: contextStrategyLogin;
  private _typeLogin: loginType;

  static newContextStrategyLogin(): contextStrategyLogin {
    if (!this.instance) {
      this.instance = new contextStrategyLogin();
    }

    return this.instance;
  }

  typeLogin(value: loginType): contextStrategyLogin {
    this._typeLogin = value;

    return this;
  }

  execute(): void {
    switch (this._typeLogin) {
      case loginType.credentials:
        new loginCredentialsStrategy()
          .userName("username")
          .password("password")
          .execute();
        break;

      case loginType.jwt:
        new loginJWTStrategy().token("asdf1asdf4asd65f465asd4f").execute();
        break;

      case loginType.twoFactorAuthentication:
        new loginTwoFactorAuthenticationStrategy().pin("123456").execute();
        break;

      default:
        break;
    }
  }
}
