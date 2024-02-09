import { COLLECTIONS_API } from "@/constants/base-api";
import axios from "axios";
import { CollectionRepoImpl } from "./collection-repo-interface";
import { Item } from "@/data/response/collection/item";
import { SingleItem } from "@/data/response/collection/single-item";
import { Publication } from "@/data/response/collection/publication";
import { Media } from "@/data/response/collection/media";
import { PriceInfo } from "@/data/response/collection/price-info";
import { Discount } from "@/data/response/collection/discount";

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
            item["items"].map(
              (item: any) =>
                new SingleItem(
                  item["name"],
                  new Publication(
                    item["publication"]["id"],
                    item["publication"]["title"],
                    item["publication"]["code"],
                    item["publication"]["prodType"],
                    item["publication"]["rating"],
                    item["publication"]["productName"],
                    item["publication"]["brandName"],
                    item["publication"]["media"].map(
                      (mediaItem: any) => new Media(mediaItem["uri"])
                    ),
                    new PriceInfo(
                      item["publication"]["priceInfo"]["price"],
                      item["publication"]["priceInfo"]["applyCoupon"] == true
                        ? item["publication"]["priceInfo"][
                            "couponDiscountPrice"
                          ]
                        : item["publication"]["priceInfo"]["discountPrice"],
                      item["publication"]["priceInfo"]["applyCoupon"] == true
                        ? item["publication"]["priceInfo"]["couponDiscountRate"]
                        : item["publication"]["priceInfo"]["discountRate"],
                      item["publication"]["priceInfo"]["applyCoupon"]
                    ),
                    item["publication"]["discounts"].map(
                      (discount: any) =>
                        new Discount(
                          discount["id"],
                          discount["qty"],
                          discount["remain"],
                          discount["name"],
                          discount["type"],
                          discount["value"]
                        )
                    )
                  )
                )
            )
          )
      );
  }
}

export default new CollectionRepo();
