"use client";

import bannerRepo from "@/data/repository/banner/banner-repo";
import { useEffect, useState } from "react";
import { Banner } from "@/data/response/banner";
import BannerSlider from "./BannerSlider";
import dynamic from "next/dynamic";

const DelayedBannerSlider = dynamic(() => import("./BannerSlider"));

export default function Hero() {
  const [bannerData, setBannerData] = useState<Banner[]>([]);
  useEffect(() => {
    async function getBannerData() {
      const data = await bannerRepo.getBanners();
      setBannerData(data);
    }

    getBannerData();
  }, []);

  return <DelayedBannerSlider data={bannerData} />;
}
