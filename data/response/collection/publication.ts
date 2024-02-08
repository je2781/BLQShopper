import { Discount } from "./discount";
import { Media } from "./media";
import { PriceInfo } from "./price-info";


export class Publication{
    id: number;
    title: string;
    rating: number;
    productName: string;
    brandName: string;
    media: Media[];
    priceInfo: PriceInfo;
    discounts: Discount[];
    
    constructor(
        id: number,
        title: string,
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
        this.priceInfo  = priceInfo;
        this.discounts  = discounts;

      }

    static fromArray(){

    }


}



