// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { Banner } from "@/data/response/banner";
// import bannerRepo from "@/data/repository/banner/banner-repo";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "swiper/css";
// import "swiper/swiper-bundle.css";
// import "@/public/css/slider.css";
// import shortcutRepo from "@/data/repository/shortcut/shortcut-repo";
// import { Shortcut } from "@/data/response/shortcut";
// import collectionRepo from "@/data/repository/collection/collection-repo";
// import { Item } from "@/data/response/collection/item";

// export default function CollectionComponent() {
//   const [collectionData, setCollectionData] = useState<Item[]>([]);

//   useEffect(() => {
//     async function getCollectionData() {
//       const data = await collectionRepo.getCollections();
//       setCollectionData(data);
//     }
//     getCollectionData();
//   }, []);

//   return (
//     <section className="px-48 w-full flex flex-row gap-24">
//       {collectionData.map((datum) => (
//         <Link href={datum.linkUrl} className="flex flex-col gap-8">
//           <img
//             src={datum.imageUrl}
//             alt="banner image"
//             className="h-96 w-full object-cover"
//           />
//           <h3 className="text-md">{datum.title}</h3>
//         </Link>
//       ))}
//     </section>
//   );
// }
