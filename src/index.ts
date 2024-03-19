import { enumDesignPatterns } from "./estruturais/facade/enum/enum.designpatterns";
import facadeTestDesignPatterns from "./estruturais/facade/facade.check.designpatterns";

function executeDesignPattern(): void {
  console.clear();
  console.log("");
  console.log("");
  console.log("");
  console.log("###################### initialization ######################");

  facadeTestDesignPatterns
    .newFacadeCheckDesignPatterns()
    .setDesignPattern(enumDesignPatterns.State)
    .execute();
}

executeDesignPattern();
