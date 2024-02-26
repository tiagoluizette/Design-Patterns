import { loginType } from "./enum/enum.typeLogin";
import contextStrategyLogin from "./service/context.strategy.login";

export default function designerPatternStrategy(value: loginType): void {
  console.log(
    "O objetivo do Strategy, é permitir que uma aplicação selecione e use um algoritmo em tempo de execução de acordo com condições impostas pela regra de negócio."
  );
  console.log("");

  contextStrategyLogin.newContextStrategyLogin().typeLogin(value).execute();
}
