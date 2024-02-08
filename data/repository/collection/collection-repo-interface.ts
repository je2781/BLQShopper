import { Collection } from "@/data/response/collection/collection";

export interface CollectionRepoImpl {
  getCollections: (

  ) => Promise<Collection[]>;


}
