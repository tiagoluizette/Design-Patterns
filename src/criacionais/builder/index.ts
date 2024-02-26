import builderFatura from "./service/builder.fatura";

export default function designerPatternBuilder(): void {
  const fatura = builderFatura
    .newBuilderFatura()
    .dataVencimento(new Date())
    .nomePessoa("Tiago Luizette")
    .telefonePessoa("(99)9 9999-9999")
    .valorFatura(10000)
    .builder();

  console.log(
    "Builder, é um padrão de projeto de software que permite a separação da construção de um objeto complexo da sua representação, de forma que o mesmo processo de construção possa criar diferentes representações."
  );
  console.log("");
  console.log(fatura.nomePessoa);
  console.log(fatura.telefonePessoa);
  console.log(fatura.dataVencimento);
  console.log(fatura.valorFatura);
}
