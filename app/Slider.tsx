import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Banner } from "@/data/response/banner";
import bannerRepo from "@/data/repository/banner/banner-repo";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chevronLeft from '@/public/images/chevron-left.svg';
import chevronRight from '@/public/images/chevron-right.svg';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} chevron-right`}
    style={{ ...style, display: "block", backgroundImage: `url(${chevronRight})`}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} chevron-left`}
      style={{ ...style, display: "block", backgroundImage: `url(${chevronLeft})`}}
      onClick={onClick}
    />
  );
}

export default function SliderComponent() {
  const [bannersData, setBannersData] = useState<Banner[]>([]);

  useEffect(() => {
    async function getBannerData() {
      const data = await bannerRepo.getBanners();
      setBannersData(data);
    }
    getBannerData();
  }, []);


  const settings = {
    className: "main-slider center",
    centerMode: true,
    infinite: true,
    centerPadding: "190px",
    slidesToShow: 1,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {bannersData.map((datum, index) => {
          return (
            <div key={index} className="slide pt-20">
              <Link href={datum.linkUrl}>
                <img
                  src={datum.pcImageUrl}
                  alt="banner image"
                  className="h-74 object-cover"
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
