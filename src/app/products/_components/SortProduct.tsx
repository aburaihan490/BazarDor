'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const SortProduct = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSort = searchParams.get('sort') || 'default';

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());

        if (selectedSort === 'default') {
            params.delete('sort');
        } else {
            params.set('sort', selectedSort);
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {}, [currentSort]);
    return (
        <div className="flex min-h-11 items-center justify-end gap-2 rounded-xl border border-[#e1e9e2] bg-white/80 px-3 py-2 sm:px-5">
            <label
                htmlFor="product-sort"
                className="text-xs text-[#78837b] sm:text-sm"
            >
                সাজান
            </label>

            <select
                id="product-sort"
                name="sort"
                value={currentSort}
                onChange={handleSortChange}
                className="cursor-pointer rounded-lg border border-[#dce5dd] bg-white px-2 py-1.5 text-xs text-[#34483a] outline-none transition focus:border-[#718b77] sm:text-sm"
            >
                <option value="default">ডিফল্ট</option>
                <option value="price-asc">দাম: কম থেকে বেশি</option>
                <option value="price-desc">দাম: বেশি থেকে কম</option>
            </select>
        </div>
    );
};

export default SortProduct;
