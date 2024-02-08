import { COLLECTIONS_API } from "@/constants/base-api";
import axios from "axios";
import { CollectionRepoImpl } from "./collection-repo-interface";
import { Item } from "@/data/response/collection/item";

class CollectionRepo implements CollectionRepoImpl {
  async getCollections() {
    const result = await axios.get(COLLECTIONS_API);

    const updatedResult = result.data.items as Array<any>;
    return updatedResult
      .filter((item) => item["viewType"] == "TILE" && item["type"] == "SINGLE")
      .map(
        (item) =>
          new Item(
            item["id"],
            item["title"],
            item["type"],
            item["viewType"],
            item["subtitle"],
            item["rating"],
            item["description"],
            item["items"]
          )
      );
  }
}

export default new CollectionRepo();
