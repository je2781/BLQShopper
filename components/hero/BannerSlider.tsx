import { LegacyRef, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Banner } from "@/data/response/banner";
import Slider from "react-slick";

import chevronLeft from "@/public/images/chevron-left.svg";
import chevronRight from "@/public/images/chevron-right.svg";
import Image from "next/image";
import { Settings } from "@/types/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/public/css/slider.css";

interface sliderProps {
  settings: Settings;
  data: Banner[];
  next: () => void;
  previous: () => void;
  sliderRef: LegacyRef<any>;
}

export default function BannerSliderComponent({
  settings,
  sliderRef,
  data,
  next,
  previous,
}: sliderProps) {
  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {data.map((datum, index) => {
          return (
            <div key={index} className="slide px-4">
              <Link href={datum.linkUrl}>
                <img
                  src={datum.pcImageUrl}
                  alt="banner image"
                  className="object-cover "
                />
              </Link>
            </div>
          );
        })}
      </Slider>
      <span className={`prev-banner cursor-pointer`} onClick={previous}>
        <Image src={chevronLeft} height={11} width={11} alt="prev arrow" />
      </span>
      <span className={`next-banner cursor-pointer`} onClick={next}>
        <Image
          src={chevronRight}
          height={11}
          width={11}
          alt="next arrow"
        />
      </span>
    </div>
  );
}
