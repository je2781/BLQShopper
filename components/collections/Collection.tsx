import { useEffect, useRef, useState } from "react";

import collectionRepo from "@/data/repository/collection/collection-repo";
import { Item } from "@/data/response/collection/item";
import CollectionSliderComponent from "./CollectionSlider";

export default function CollectionComponent() {
  const [collectionData, setCollectionData] = useState<Item[]>([]);

  useEffect(() => {
    async function getCollectionData() {
      const data = await collectionRepo.getCollections();
      setCollectionData(data);
    }
    getCollectionData();
  }, []);

  //creating a ref to controll the navigation arrows of slider
  let sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef?.current?.slickNext();
  };
  const previous = () => {
    sliderRef?.current?.slickPrev();
  };

  const settings = {
    className: "bg-white h-70 collection-slider",
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
    dots: false,
    arrows: false,

  };

  return (
    <section className="px-48 w-full bg-white flex flex-col gap-y-16 collection-content">
      {collectionData.map((datum, index) => (
        <div className="flex flex-row gap-x-16 justify-between single-collection" key={index}>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-lg break-words w-52">{datum.title}</h1>
            <h3 className="text-xs break-words w-52">{datum.subTitle}</h3>
          </div>
          <CollectionSliderComponent
            next={next}
            data={datum.singleItems}
            settings={settings}
            previous={previous}
            sliderRef={sliderRef}
          />
        </div>
      ))}
    </section>
  );
}
