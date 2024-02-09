import { Item } from "@/data/response/collection/item";

export interface CollectionRepoImpl {
  getCollections: (

  ) => Promise<Item[]>;


}
