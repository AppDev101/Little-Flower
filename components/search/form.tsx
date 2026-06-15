"use client";

import { usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function Search() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams();

    if (query) params.set("search", query);
    else params.delete("search");

    router.replace(`${pathname}?${params.toString().toLowerCase()}`);
  }, 500);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-4">
      <label htmlFor="search" className="text-xl text-white">
        What would you like today?
      </label>
      <input
        type="search"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
        className="mx-auto mt-2 block max-w-141.25 min-w-75 rounded-lg bg-white/70 px-3 py-1 text-black/80 focus:outline-none min-[605px]:w-[90%]"
      />
    </form>
  );
}

export default Search;
