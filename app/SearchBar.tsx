import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="rounded-md border-2 border-gray-200 flex flex-row gap-x-2 w-7/12 p-2 h-12 active:border-green-300">
      <Image
        src="/search.svg"
        alt="search Logo"
        width={16}
        height={16}
        priority
      />
      <input
        className="text-xs w-full outline-none"
        placeholder="If you're wondering whether to buy it, or not"
        
        type="search"
      />
    </div>
  );
};

export default SearchBar;
