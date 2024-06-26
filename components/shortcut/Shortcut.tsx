import Link from "next/link";

import shortcutRepo from "@/data/repository/shortcut/shortcut-repo";

export async function getShortcutData() {
  const data = await shortcutRepo.getShortcuts();
  return data;
}

export default async function ShortcutComponent() {
  const shortcutData = await getShortcutData();

  return (
    <section className="px-48 w-full flex flex-row gap-x-9 bg-white shortcut-content pt-10 pb-16 justify-center 2xl:mt-16">
        {shortcutData.map((datum, index) => (
          <Link href={datum.linkUrl} className="flex flex-col gap-y-4" key={index}>
            <div className="w-16 inline-block">
              <img
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
