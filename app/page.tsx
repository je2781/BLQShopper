import CollectionComponent from "@/components/collections/Collection";
import Hero from "@/components/hero/Hero";
import ShortcutComponent from "@/components/shortcut/Shortcut";

export default function Home() {
  return (
    <>
      <Hero />
      <ShortcutComponent />

      <CollectionComponent />
    </>
  );
}
