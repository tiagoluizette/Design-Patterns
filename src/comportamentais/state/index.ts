import contextDiscountState from "./service/context";

export default function designerPatternState(): void {
  console.log(
    "O padrão State é um padrão de design comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda."
  );
  console.log("");

  console.log(
    contextDiscountState
      .newContextDiscountState()
      .setValueProduct(1000)
      .applyDiscount()
  );
}
