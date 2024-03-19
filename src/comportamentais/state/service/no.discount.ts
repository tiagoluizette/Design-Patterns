import iStateDiscount from "../model/interface.state.discount";

export default class noDiscountState implements iStateDiscount{
    applyDiscount(value: number): number {
        return value;
    }
}