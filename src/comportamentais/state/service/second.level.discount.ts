import iStateDiscount from "../model/interface.state.discount";

export default class secondLevelDiscountState implements iStateDiscount{
    applyDiscount(value: number): number {
        return value * 0.7;
    }
}