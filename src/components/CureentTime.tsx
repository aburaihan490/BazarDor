import { cacheLife } from 'next/cache';

export default async function CurrentTime() {
    'use cache';
    cacheLife('days');

    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
        timeZone: 'Asia/Dhaka',
    });

    return <>{date}</>;
}
