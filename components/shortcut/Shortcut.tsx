import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import shortcutRepo from "@/data/repository/shortcut/shortcut-repo";
import { Shortcut } from "@/data/response/shortcut";

export default function ShortcutComponent() {
  const [shortcutData, setShortcutData] = useState<Shortcut[]>([]);

  useEffect(() => {
    async function getShortcutData() {
      const data = await shortcutRepo.getShortcuts();
      setShortcutData(data);
    }
    getShortcutData();
  }, []);

  return (
    <section className="px-48 w-full flex flex-row gap-x-9 bg-white shortcut-content pt-10 pb-16">
        {shortcutData.map((datum, index) => (
          <Link href={datum.linkUrl} className="flex flex-col gap-y-4" key={index}>
            <div className="w-16 inline-block">
              <Image
                src={datum.imageUrl}
                alt="shortcut image"
                width={64}
                height={64}
                className="w-full"
              />
            </div>
            <h3 className="text-xs self-center">{datum.title}</h3>
          </Link>
        ))}
      
    </section>
  );
}
