

export class Shortcut{
    mainShortcutId: number;
    title: string;
    imageUrl: string;
    linkUrl: string;
    
    constructor(
        mainShortcutId: number,
        title: string,
        imageUrl: string,
        linkUrl: string
      ) {
        this.mainShortcutId = mainShortcutId;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
        this.title  = title;

      }



}



