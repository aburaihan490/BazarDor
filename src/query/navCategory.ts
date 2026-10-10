import { NavCategory } from '@/types';
import 'server-only';

export const navCategory = async (): Promise<NavCategory[]> => {
    'use cache';
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories',
    );
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }

    return res.json();
};
