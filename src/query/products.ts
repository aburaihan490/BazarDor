import 'server-only';
import { ProductsType } from '@/types';
import { cacheLife, cacheTag } from 'next/cache';
import { notFound } from 'next/navigation';

// ১. All Products Query
export const allProducts = async (): Promise<ProductsType[]> => {
    'use cache';

    cacheTag('products');
    cacheLife({ revalidate: 300 });

    const PRIMARY_URL = 'https://api.abcz.workers.dev/api/bazardor/products';
    const FALLBACK_URL =
        'https://api.api-store.workers.dev/api/bazardor/products';

    try {
        const res = await fetch(PRIMARY_URL);
        if (!res.ok) throw new Error('Primary API failed');
        return await res.json();
    } catch {
        const fallbackRes = await fetch(FALLBACK_URL);
        if (!fallbackRes.ok) throw new Error('Both APIs failed');
        return await fallbackRes.json();
    }
};

// ২. Single Product Query
export const SingleProduct = async ({
    id,
}: {
    id: string;
}): Promise<ProductsType> => {
    const PRIMARY_URL = `https://api.abcz.workers.dev/api/bazardor/products/${id}`;
    const FALLBACK_URL = `https://api.api-store.workers.dev/api/bazardor/products/${id}`;

    try {
        const res = await fetch(PRIMARY_URL, { cache: 'no-store' });
        if (!res.ok) notFound();
        return await res.json();
    } catch {
        const fallbackRes = await fetch(FALLBACK_URL, { cache: 'no-store' });
        if (!fallbackRes.ok) notFound();
        return await fallbackRes.json();
    }
};

// ৩. Category Products Query
export const categoryProducts = async ({
    slug,
}: {
    slug: string;
}): Promise<ProductsType[]> => {
    'use cache';
    cacheTag('category');
    cacheLife({ revalidate: 400 });

    const PRIMARY_URL = `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`;
    const FALLBACK_URL = `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`;

    try {
        const res = await fetch(PRIMARY_URL);
        if (!res.ok) notFound();
        return await res.json();
    } catch {
        const fallbackRes = await fetch(FALLBACK_URL);
        if (!fallbackRes.ok) notFound();
        return await fallbackRes.json();
    }
};
