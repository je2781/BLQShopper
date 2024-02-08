

export class Banner{
    bannerId: number;
    title: string;
    pcImageUrl: string;
    mobileImageUrl: string;
    linkUrl: string;
    
    constructor(
        bannerId: number,
        title: string,
        pcImageUrl: string,
        mobileImageUrl: string,
        linkUrl: string
      ) {
        this.bannerId = bannerId;
        this.linkUrl = linkUrl;
        this.mobileImageUrl = mobileImageUrl;
        this.pcImageUrl = pcImageUrl;
        this.title  = title;

      }

    static fromArray(){

    }


}



