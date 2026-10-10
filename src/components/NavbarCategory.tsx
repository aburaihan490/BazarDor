'use client';
import { useSession } from '@/lib/auth-client';
import { NavCategory } from '@/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Porps {
    nav: NavCategory[];
}
const NavbarCategory = ({ nav }: Porps) => {
    const searchParams = useSearchParams();
    const search = searchParams.get('category');
    const { data: session, isPending } = useSession();
    const user = session?.user;

    return (
        <>
            {isPending ? (
                <div className="p-0 animate-pulse"></div>
            ) : (
                !user && (
                    <div className="flex items-center justify-end gap-3 sm:hidden me-8">
                        <Link
                            href="/signin"
                            className="rounded-lg px-4 py-2 text-sm font-medium"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white"
                        >
                            সাইন আপ
                        </Link>
                    </div>
                )
            )}

            <div className="hidden w-full max-w-7xl mx-auto px-4 pb-3 sm:px-5 md:block md:px-6">
                <div className="flex flex-wrap gap-2">
                    {nav.map((category) => (
                        <Link
                            href={`/products?category=${category.slug}`}
                            key={category.id}
                            className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                                search === category.slug
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-300'
                            }`}
                        >
                            <span className="me-1.5">{category.icon}</span>
                            {category.nameBn}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavbarCategory;
