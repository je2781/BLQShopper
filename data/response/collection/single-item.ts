import { Publication } from "./publication";


export class SingleItem{
    name: string;
    publication: Publication;

    
    constructor(
        name: string,
        publication : Publication,

      ) {
        this.name = name;
        this.publication = publication;

      }


}



