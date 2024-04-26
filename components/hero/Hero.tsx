'use client';

import bannerRepo from "@/data/repository/banner/banner-repo";
import { useEffect, useState } from "react";
import { Banner } from "@/data/response/banner";
import BannerSlider from "./BannerSlider";
import dynamic from "next/dynamic";


const DelayedBannerSlider = dynamic(() => import("./BannerSlider"), {
  loading: () => (
    <div className="flex flex-row justify-center h-12 bg-white items-center w-full">
      <p className="text-2xl text-black">Loading...</p>
    </div>
  ),
  
});

export default function Hero() {
  const [bannerData, setBannerData] = useState<Banner[]>([]);
  useEffect(() => {
    
    async function getBannerData() {
      const data = await bannerRepo.getBanners();
      setBannerData(data);
    }

    getBannerData();
  }, []);


  return (
    <DelayedBannerSlider
      data={bannerData}
    />
  );
}
