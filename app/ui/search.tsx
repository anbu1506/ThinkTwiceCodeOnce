"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
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
      <div className="w-full">
        <div className="flex h-full justify-center items-center p-4">
          <MagnifyingGlassIcon className="text-white w-12 h-12  p-2 rounded-l-lg border border-slate-50 bg-neutral-950"></MagnifyingGlassIcon>
          <input
            className="pl-2 w-96 h-12   text-slate-500 rounded-r-lg border border-slate-50  outline-none bg-neutral-950"
            placeholder="search..."
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          ></input>
        </div>
      </div>
    </>
  );
}
