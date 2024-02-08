import { SingleItem } from "./single-item";


export class Item{
    ItemId: number;
    type: string;
    title: string;
    subTitle: string;
    viewType: string;
    rating: number;
    description: string;
    singleItems: SingleItem[];
    
    constructor(
        ItemId: number,
        title: string,
        type: string,
        viewType: string,
        subTitle: string,
        rating: number,
        description: string,
        singleItems: SingleItem[]
      ) {
        this.ItemId = ItemId;
        this.type = type;
        this.title = title;
        this.viewType = viewType;
        this.subTitle = subTitle;
        this.rating  = rating;
        this.description  = description;
        this.singleItems  = singleItems;
      }

    static fromArray(){

    }


}



