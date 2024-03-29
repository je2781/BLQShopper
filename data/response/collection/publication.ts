import { Discount } from "./discount";
import { Media } from "./media";
import { PriceInfo } from "./price-info";


export class Publication{
    id: number;
    title: string;
    rating: number;
    code: string;
    prodType: number;
    productName: string;
    brandName: string;
    media: Media[];
    priceInfo: PriceInfo;
    discounts: Discount[];
    
    constructor(
        id: number,
        title: string,
        code: string,
        prodType: number,
        rating: number,
        productName: string,
        brandName: string,
        media: Media[],
        priceInfo: PriceInfo,
        discounts: Discount[]
      ) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.productName = productName;
        this.brandName  = brandName;
        this.media  = media;
        this.code = code;
        this.prodType = prodType;
        this.priceInfo  = priceInfo;
        this.discounts  = discounts;

      }

    static fromArray(){

    }


}



