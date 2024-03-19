import iStateDiscount from "../model/interface.state.discount";
import firstLevelDiscountState from "./first.level.discount";
import noDiscountState from "./no.discount";
import secondLevelDiscountState from "./second.level.discount";
import thirdLevelDiscountState from "./third.level.discount";

export default class contextDiscountState{
    static instance: contextDiscountState;
    private productValue: number;
    private discount: iStateDiscount;

    static newContextDiscountState() {
        if (!this.instance) {
            this.instance = new contextDiscountState();
        }

        return this.instance;
    }

    setValueProduct(value: number): contextDiscountState{
        this.productValue = value;

        return this;
    }

    applyDiscount(): number{
        if (this.productValue <= 50) { 
            this.discount = new noDiscountState()             
        } else {
            if (this.productValue <= 80) {
                this.discount = new firstLevelDiscountState();
            } else {
                if (this.productValue <= 100) {
                    this.discount = new secondLevelDiscountState();
                } else {
                    this.discount = new thirdLevelDiscountState();
                }  
            }    
        }                

        return this.discount.applyDiscount(this.productValue);
    }
}