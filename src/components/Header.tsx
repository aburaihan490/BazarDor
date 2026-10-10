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
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
                            className="w-5 h-5 md:w-7.5 md:h-7.5"
                        />
                    </Link>
                    <div className="text-2xl font-bold">
                        <span>বাজার দর</span>
                        <p className="mt-1 text-sm text-gray-500">
                            <CurrentTime />
                        </p>
                    </div>
                </div>

                {/* Auth */}
                <div className="hidden md:flex items-center gap-3">
                    <ProfileAction />
                </div>

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

            {/* Category Navigation */}
            <nav>
                <Suspense>
                    <NavbarCategory nav={nav} />
                </Suspense>
            </nav>
        </header>
    );
}
