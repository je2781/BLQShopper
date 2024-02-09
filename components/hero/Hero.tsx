import bannerRepo from "@/data/repository/banner/banner-repo";
import { Banner } from "@/data/response/banner";
import React, { useEffect, useRef, useState } from "react";
import BannerSliderComponent from "./BannerSlider";

export default function Hero() {
  const [bannersData, setBannersData] = useState<Banner[]>([]);
    //creating a ref to controll the navigation arrows of slider
  let sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };
  useEffect(() => {
    async function getBannerData() {
      const data = await bannerRepo.getBanners();
      setBannersData(data);
    }
    getBannerData();
  }, []);

  const settings = {
    className: "center bg-white pt-20 banner-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "190px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    fade: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
