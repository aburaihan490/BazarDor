import Image from 'next/image';
import CurrentTime from './CureentTime';
import ProfileAction from './ProfileAction';
import NavbarCategory from './NavbarCategory';
import { navCategory } from '@/query/navCategory';
import { Suspense } from 'react';
import MobileNav from './MobileNav';
import Link from 'next/link';

export default async function Header() {
    const nav = await navCategory();

    return (
        <header className="bg-white border-b border-b-gray-200 pb-2">
            {/* Top Row */}
            <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
                {/* Logo */}

                <div className="flex gap-x-2.5">
                    <Link
                        href={'/'}
                        className="rounded-[14px] bg-green-600 px-5 md:p-2.5 flex items-center justify-center"
                    >
                        <Image
                            src="/logo-icon.png"
                            alt="logo"
                            width={800}
                            height={800}
                            className="w-4 h-4 md:w-7.5 md:h-7.5"
                        />
                    </Link>
                    <div className="text-[16px] md:text-2xl font-bold">
                        <span>বাজার দর</span>
                        <p className="mt-1 text-xs md:text-sm text-gray-500">
                            <CurrentTime />
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-x-2">
                    {/* Auth */}
                    <ProfileAction />

                    {/* ----- Mobile Nav ------- */}
                    <Suspense>
                        <MobileNav>
                            <nav className="grid grid-cols-2 gap-2 p-4 z-150">
                                {nav.map((category) => (
                                    <Link
                                        href={`/products?category=${category.slug}`}
                                        key={category.id}
                                        className="rounded-lg px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
                                    >
                                        <span className="me-1.5">
                                            {category.icon}
                                        </span>
                                        {category.nameBn}
                                    </Link>
                                ))}
                            </nav>
                        </MobileNav>
                    </Suspense>
                </div>
            </div>

            {/* Category Navigation */}
            <nav>
                <Suspense
                    fallback={
                        <div className="hidden w-full max-w-7xl mx-auto px-4 pb-3 sm:px-5 md:block md:px-6">
                            <div className="flex flex-wrap items-center gap-2">
                                {Array.from({ length: 7 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="h-9 w-24 animate-pulse rounded-lg bg-gray-200"
                                    />
                                ))}
                            </div>
                        </div>
                    }
                >
                    <NavbarCategory nav={nav} />
                </Suspense>
            </nav>
        </header>
    );
}
