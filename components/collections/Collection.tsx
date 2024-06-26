
import collectionRepo from "@/data/repository/collection/collection-repo";
import { Item } from "@/data/response/collection/item";
import CollectionSliderComponent from "./CollectionSlider";


export async function getCollectionData() {
  const data = await collectionRepo.getCollections();
  return data;
}
export default async function CollectionComponent() {
    const collectionData = await getCollectionData();

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
    <section className="w-full bg-white flex flex-col gap-y-16 collection-content items-center justify-center">
      {collectionData.map((datum, index) => (
        <div className="flex flex-row gap-x-12 justify-center single-collection" key={index}>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold text-lg break-words w-52">{datum.title}</h1>
            <h3 className="text-xs break-words w-52">{datum.subTitle}</h3>
          </div>
          <CollectionSliderComponent
            data={datum['items']}
            settings={settings}
          />
        </div>
      ))}
    </section>
  );
}
