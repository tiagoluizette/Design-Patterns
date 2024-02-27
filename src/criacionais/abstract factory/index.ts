import { marcaCompoutador } from "./enum/enum.marca";
import facadeMarca from "./facade/facade.marca";

export default function designerPatternAbstractFactory(): void {
  console.log(
    "Abstract Factory, é um padrão de projeto que fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas."
  );
  console.log("");

  let dadosComputador: {};

  dadosComputador = facadeMarca
    .newFacadeMarca()
    .marca(marcaCompoutador.Samsung)
    .consultarDadosComputador();

  console.log(dadosComputador);
}
