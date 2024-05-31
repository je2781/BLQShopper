
import { LegacyRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

import Slider from "react-slick";

import chevronLeft from "@/public/images/chevron-left.svg";
import chevronRight from "@/public/images/chevron-right.svg";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/public/css/slider.css";
import { useWindowSize } from "@uidotdev/usehooks";
import { Settings } from "@/types/types";
import { Banner } from "@/data/response/banner";

interface sliderProps {
  data: Banner[];
}

export default function BannerSliderComponent({ data,  }: sliderProps) {
  //tracking browser window width dynamically
  const { width } = useWindowSize();

  const [config, setConfig] = useState<Settings>();
  //creating a ref to controll the navigation arrows of slider
  let sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };

  useLayoutEffect(() => {
      let updatedConfig = {
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

      setConfig(updatedConfig);

  }, [width, setConfig]);

  return (
    <>
      <Slider {...config} ref={sliderRef}>
        {data.map((datum, index) => {
          return (
            <div key={index} className="slide px-4">
              <Link href={datum.linkUrl} className="outline-none">
                <img
                  src={datum.pcImageUrl}
                  alt="banner image"
                  className="object-cover lg:h-fit w-full h-56"
                />
              </Link>
            </div>
          );
        })}
      </Slider>
      <div className="bg-white nav-arrows">
        <span className={`prev-banner cursor-pointer`} onClick={previous}>
          <Image src={chevronLeft} height={11} width={11} alt="prev arrow" />
        </span>
        <span className={`next-banner cursor-pointer`} onClick={next}>
          <Image src={chevronRight} height={11} width={11} alt="next arrow" />
        </span>
      </div>
    </>
  );
}
