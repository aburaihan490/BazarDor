'use server';
import { ProductsType } from '@/types';
import { cacheLife, cacheTag } from 'next/cache';

// All Products Query
export const allProducts = async (): Promise<ProductsType[]> => {
    'use cache';

    cacheTag('products');
    cacheLife({ revalidate: 300 });

    try {
        const res = await fetch(
            'https://api.api-store.workers.dev/api/bazardor/products',
        );

        if (!res.ok) {
            throw new Error('Failed to fetch products');
        }

        const data: ProductsType[] = await res.json();

        return data;
    } catch (error) {
        console.error(error);

        return [];
    }
};

// Single Product Query
export const SingleProduct = async ({
    id,
}: {
    id: string;
}): Promise<ProductsType> => {
    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
        {
            cache: 'no-store',
        },
    );
    const data: ProductsType = await res.json();
    return data;
};

// Category Products Query
export const categoryProducts = async ({
    slug,
}: {
    slug: string;
}): Promise<ProductsType[]> => {
    'use cache';
    cacheTag('category');
    cacheLife({ revalidate: 400 });
    const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
    );

    const data: ProductsType[] = await res.json();
    return data;
};
