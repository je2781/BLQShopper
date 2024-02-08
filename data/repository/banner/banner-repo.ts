import { MAIN_BANNER_API } from "@/constants/base-api";
import { BannerRepoImpl } from "./banner-repo-interface";
import { Banner } from "@/data/response/banner";
import axios from "axios";

class BannerRepo implements BannerRepoImpl {
  async getBanners() {
    const result = await axios.get(
      MAIN_BANNER_API
    );

    const updatedResult = result.data as Array<any>;
    return updatedResult.map(
      (banner) =>
        new Banner(
          banner["mainBannerId"],
          banner["title"],
          banner["pcImageUrl"],
          banner["mobileImageUrl"],
          banner["linkUrl"]
        )
    );
  }
}

export default new BannerRepo();
