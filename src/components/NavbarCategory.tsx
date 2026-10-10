'use client';
import { NavCategory } from '@/types';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Porps {
    nav: NavCategory[];
}
const NavbarCategory = ({ nav }: Porps) => {
    const searchParams = useSearchParams();
    const search = searchParams.get('category');

    return (
        <div className="hidden md:block w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-3">
            {nav.map((category) => {
                return (
                    <Link
                        href={`/products?category=${category.slug}`}
                        key={category.id}
                        className={`
                rounded-lg px-5 py-2 text-sm font-medium
                transition
${search === `${category.slug}` ? 'bg-green-600 p-3 text-white' : 'text-gray-600 hover:bg-gray-300'}
              `}
                    >
                        <span className="me-1.5">{category.icon}</span>
                        {category.nameBn}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavbarCategory;
