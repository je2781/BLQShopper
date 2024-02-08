import { Banner } from "@/data/response/banner";

export interface BannerRepoImpl {
  getBanners: (

  ) => Promise<Banner[]>;


}
