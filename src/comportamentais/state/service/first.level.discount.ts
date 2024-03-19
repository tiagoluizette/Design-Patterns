import iStateDiscount from "../model/interface.state.discount";

export default class firstLevelDiscountState implements iStateDiscount{
    applyDiscount(value: number): number {
        return (value * 0.8);
    }
}