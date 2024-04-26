import CollectionComponent from "@/components/collections/Collection";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import ShortcutComponent from "@/components/shortcut/Shortcut";
import dynamic from "next/dynamic";


export default function Home() {
  return (
    <>
      <Hero />
      <ShortcutComponent />

      <CollectionComponent />
    </>
  );
}
