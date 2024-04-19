"use client";

import { useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchHome() {
  const { replace } = useRouter();
  const path = usePathname();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams();
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${path}?${params.toString()}`);
  }, 300);

  return (
    <>
      <input
        className="bg-white px-3 py-2 outline-none rounded-md w-[30%]"
        placeholder="search"
        type="text"
        onChange={(e)=>{
            handleSearch(e.target.value)
        }}
      />
    </>
  );
}
