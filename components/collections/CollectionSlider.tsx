import React from "react";
import { LegacyRef, useEffect, useRef, useState } from "react";
import Link from "next/link";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/public/css/slider.css";
import rating from "@/public/images/rating.svg";
import Image from "next/image";
import { Settings } from "@/types/types";
import { SingleItem } from "@/data/response/collection/single-item";

import chevronLeftOut from "@/public/images/chevron-left-outline.svg";
import chevronRightOut from "@/public/images/chevron-right-outline.svg";

interface collectionSliderProps {
  settings: Settings;
  data: SingleItem[];
}

export default function CollectionSliderComponent({
  settings,
  data,
}: collectionSliderProps) {
  //creating a ref to controll the navigation arrows of slider
  let sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };
  return (
    <div className="collection-container">
      <Slider {...settings} ref={sliderRef}>
        {data.map((singleItem, index) => (
          <div key={index} className="slide px-1 w-48 h-full">
            <Link href="/" className="flex flex-col justify-start gap-y-2 outline-none">
              <img
                src={singleItem.publication.media[0].uri}
                alt="collection image"
                className="object-contain w-full h-full"
              />
              <h3 className="text-sm">{singleItem.publication.title}</h3>
              <span className="font-bold text-md">
                <span className="text-red-600 text-md">{`${singleItem.publication.priceInfo.rate}%`}</span>
                {singleItem.publication.priceInfo.discountPrice}
              </span>
              <span className="flex flex-row text-xs">
                <Image src={rating} height={10} width={10} alt="rating" />
                {singleItem.publication.rating}
              </span>
            </Link>
          </div>
        ))}
      </Slider>
      <div className="flex flex-row gap-x-4 block nav-arrows">
        <Image
          src={chevronLeftOut}
          height={24}
          width={24}
          alt="prev arrow"
          className="prev-collection cursor-pointer"
          onClick={previous}
        />
        <Image
          src={chevronRightOut}
          height={24}
          width={24}
          alt="next arrow"
          className="next-collection cursor-pointer"
          onClick={next}
        />
      </div>
      <div className="hidden grid grid-cols-2 collection-grid gap-x-4 gap-y-10">
        {data.map((singleItem, index) => (
          <div key={index} className="w-full h-full">
            <Link href="/" className="flex flex-col justify-start gap-y-2">
              <img
                src={singleItem.publication.media[0].uri}
                alt="collection image"
                className="object-contain"
              />
              <h3 className="text-sm">{singleItem.publication.title}</h3>
              <span className="font-bold text-md">
                <span className="text-red-600 text-md">{`${singleItem.publication.priceInfo.rate}%`}</span>
                {singleItem.publication.priceInfo.discountPrice}
              </span>
              <span className="flex flex-row text-xs">
                <Image src={rating} height={10} width={10} alt="rating" />
                {singleItem.publication.rating}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
