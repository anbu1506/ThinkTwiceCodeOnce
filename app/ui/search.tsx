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
            <div className="flex h-full justify-center items-center">
                <MagnifyingGlassIcon className='w-12 h-12 bg-slate-700 p-2 rounded-l-lg shadow-2xl shadow-cyan-500/50'></MagnifyingGlassIcon>
                <input className="pl-2 w-96 h-12 bg-slate-700 shadow-2xl shadow-cyan-500/50 text-white rounded-r-lg  outline-none" placeholder='search...' onChange={(e) => { handleSearch(e.target.value) }}></input>
            </div>
        </div>
    </>)
}