import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row fixed navbar-height bg-white w-full px-48 py-4 top-0 left-0 z-10">
      <div className="flex flex-row gap-x-44">
        <div className="gap-x-4 flex flex-row">
          <Image
            src="/images/tv.svg"
            alt="test valley Logo"
            width={130}
            height={37}
            priority
          />
          <div className="flex flex-row gap-x-1 cursor-pointer">
            <Image
              src="/images/menu.svg"
              alt="burger Logo"
              width={18}
              height={18}
            />
            <h2 className="align-baseline text-sm pt-3">category</h2>
          </div>
        </div>
        <SearchBar />
        <div className="flex flex-row gap-x-2">
            <Image
                src="/images/benefits.svg"
                alt="benefits Logo"
                width={28}
                height={28}
                priority
            />
            <span className="border-l-2 border-grey-300 my-4"></span>
            <Link href='/login' className="pt-3 text-sm font-medium">Login/Signup</Link>
        </div>
      </div>
    </nav>
  );
}
