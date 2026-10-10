import { NavCategory } from '@/types';
import 'server-only';

export const navCategory = async (): Promise<NavCategory[]> => {
    'use cache';

    // ১. প্রথম ও দ্বিতীয় API ইউআরএল
    const PRIMARY_API = 'https://api.abcz.workers.dev/api/bazardor/categories';
    const FALLBACK_API =
        'https://api.api-store.workers.dev/api/bazardor/categories';

    try {
        // প্রথমে Primary API তে চেষ্টা করবে
        const res = await fetch(PRIMARY_API);

        if (!res.ok) {
            throw new Error(`Primary API failed with status ${res.status}`);
        }

        return await res.json();
    } catch (primaryError) {
        console.warn(
            'Primary API failed, trying fallback API...',
            primaryError,
        );

        try {
            // Primary API ব্যর্থ হলে Fallback API তে চেষ্টা করবে
            const fallbackRes = await fetch(FALLBACK_API);

            if (!fallbackRes.ok) {
                throw new Error(
                    `Fallback API failed with status ${fallbackRes.status}`,
                );
            }

            return await fallbackRes.json();
        } catch (fallbackError) {
            console.error(
                'Both primary and fallback APIs failed:',
                fallbackError,
            );
            // দুটোই ব্যর্থ হলে একটি ফাঁকা অ্যারে (Empty Array) বা কাস্টম এরর হ্যান্ডলিং
            return [];
        }
    }
};
