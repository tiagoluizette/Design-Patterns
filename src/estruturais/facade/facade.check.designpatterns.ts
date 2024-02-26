import { enumDesignPatterns } from "./enum/enum.designpatterns";
import designerPatternSingleton from "../../criacionais/singleton";
import designerPatternBuilder from "../../criacionais/builder";
import designerPatternFactoryMethod from "../../criacionais/factory method";
import designerPatternTemplateMethod from "../../comportamentais/template method";
import { enumFileType } from "../../comportamentais/template method/enum/enum.file";
import designerPatternStrategy from "../../comportamentais/strategy";
import { loginType } from "../../comportamentais/strategy/enum/enum.typeLogin";
import designerPatternProxy from "../proxy";
import designerPatternFacade from ".";

export default class facadeCheckDesignPatterns {
  static instance: facadeCheckDesignPatterns;
  private designPattern: enumDesignPatterns;

  static newFacadeCheckDesignPatterns() {
    if (!this.instance) {
      this.instance = new facadeCheckDesignPatterns();

      console.log("");
      console.log(
        "O Facade é um padrão de projeto estrutural que fornece uma interface simplificada para uma biblioteca, um framework, ou qualquer conjunto complexo de classes. É útil ao ter uma biblioteca ou classe complexa com muitos métodos, ou funcionalidades, onde esses métodos complexos ficam encapsulados na classe facade disponibilizando apenas o que é necessário para o funcionamento do sistema."
      );
      console.log("");
      console.log(
        "############################################################"
      );
      console.log("");
    }

    return this.instance;
  }

  setDesignPattern(value: enumDesignPatterns): facadeCheckDesignPatterns {
    this.designPattern = value;

    return this;
  }

  execute(): facadeCheckDesignPatterns {
    switch (this.designPattern) {
      case enumDesignPatterns.Facade:
        designerPatternFacade();
        break;

      case enumDesignPatterns.Singleton:
        designerPatternSingleton();
        break;

      case enumDesignPatterns.Builder:
        designerPatternBuilder();
        break;

      case enumDesignPatterns.FactoryMethod:
        designerPatternFactoryMethod();
        break;

      case enumDesignPatterns.TemplateMethod:
        designerPatternTemplateMethod(enumFileType.XML);
        break;

      case enumDesignPatterns.Strategy:
        designerPatternStrategy(loginType.jwt);
        break;

      case enumDesignPatterns.Proxy:
        designerPatternProxy("01001-000");
        designerPatternProxy("01001-000");
        designerPatternProxy("01001-000");
        break;

      default:
        console.log("Atenção, enumerado design patterns não foi informado!");
    }

    return this;
  }
}
