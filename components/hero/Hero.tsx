import bannerRepo from "@/data/repository/banner/banner-repo";
import { Banner } from "@/data/response/banner";
import React, { useEffect, useRef, useState } from "react";
import BannerSliderComponent from "./BannerSlider";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Hero() {
  const [bannersData, setBannersData] = useState<Banner[]>([]);
  //tracking browser window width dynamically
  const { width } = useWindowSize();
  //creating a ref to controll the navigation arrows of slider
  let sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };
  //fetching banner data
  useEffect(() => {
    async function getBannerData() {
      const data = await bannerRepo.getBanners();
      setBannersData(data);
    }
    getBannerData();
  }, []);

  const settings = {
    className: "bg-white banner-slider",
    centerMode: width! < 960 ? false : true,
    infinite: true,
    centerPadding:
      //responsive design for center padding of slider
      width! < 960
        ? "0px"
        : width! >= 1536 && width! < 1700
        ? "300px"
        : width! >= 1400 && width! <= 1535
        ? "245px"
        : width! >= 1300 && width! < 1400
        ? "190px"
        : width! >= 1100 && width! < 1200
        ? "90px"
        : width! >= 1200 && width! < 1300
        ? "140px"
        : width! > 1024 && width! < 1251
        ? "70px"
        : width! >= 1800 && width! <= 1950
        ? "475px"
        : width! > 1950
        ? "540px"
        : width! >= 1700 && width! < 1800
        ? "400px"
        : "140px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  };

  return (
    <BannerSliderComponent
      settings={settings}
      sliderRef={sliderRef}
      previous={previous}
      next={next}
      data={bannersData}
    />
  );
}
