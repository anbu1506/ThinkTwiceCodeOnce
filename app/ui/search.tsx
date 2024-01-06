"use client"

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function Search() {
    const { replace } = useRouter();
    const path = usePathname();
    const searchParams = useSearchParams();

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams();
        if (value) {
            params.set('search', value);
        }
        else {
            params.delete('search');
        }
        replace(`${path}?${params.toString()}`)
    }, 300);

    return (<>
        <div className="w-full" >
            <div className="flex h-full justify-center items-center p-4">
                <MagnifyingGlassIcon className='w-12 h-12  p-2 rounded-l-lg shadow-2xl border border-slate-900 bg-slate-200'></MagnifyingGlassIcon>
                <input className="pl-2 w-96 h-12  shadow-2xl  text-slate-500 rounded-r-lg border border-slate-900  outline-none" placeholder='search...' onChange={(e) => { handleSearch(e.target.value) }}></input>
            </div>
        </div>
    </>)
}