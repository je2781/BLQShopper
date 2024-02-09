

export class PriceInfo{
    price: number;
    discountPrice?: number;
    rate: number;
    applyCoupon: boolean;

    
    constructor(
        price: number,
        discountPrice: number,
        rate: number,
        applyCoupon: boolean
      ) {
        this.price = price;
        this.discountPrice = discountPrice;
        this.rate = rate;
        this.applyCoupon = applyCoupon;
      }


}



