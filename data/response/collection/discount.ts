

export class Discount{
    id: number;
    qty: number;
    remain: number;
    name: string;
    type: string;
    value: number;

    
    constructor(
        id: number,
        qty: number,
        remain: number,
        name: string,
        type: string,
        value: number
      ) {
        this.id = id;
        this.qty = qty;
        this.remain = remain;
        this.name = name;
        this.type  = type;
        this.value  = value;

      }

    static fromArray(){

    }


}



