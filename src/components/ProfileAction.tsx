'use client';

import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ProfileAction = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            setIsOpen(false);
            toast.success('Logout Successfull');
            router.push('/signin');
            router.refresh();
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };

    // skeleton loaders user Profile
    if (isPending) {
        return (
            <div className="flex items-center gap-3 animate-pulse p-2">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                {/* <div className="flex flex-col gap-1.5">
                    <div className="h-4 w-24 rounded bg-gray-200" />
                </div> */}
            </div>
        );
    }

    if (!user) {
        return (
            <div className="hidden sm:flex items-center gap-x-3">
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
        );
    }

    return (
        <div className="relative">
            {/* Profile Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100 cursor-pointer"
            >
                <Image
                    src={
                        user.image ||
                        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200'
                    }
                    width={48}
                    height={48}
                    alt={user.name || 'User'}
                    className="h-12 w-12 rounded-full object-cover"
                />

                <span className="hidden md:block font-medium text-gray-800">
                    {user.name}
                </span>

                <span className="text-xs text-gray-500">
                    {isOpen ? '▲' : '▼'}
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-55 bg-transparent"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute -right-12 md:right-0 top-full z-60 mt-3 w-80 max-w-[calc(100vw-2rem)] rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                        {/* User Info */}
                        <div className="mb-5">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {user.name}
                            </h3>

                            <p className="break-all text-sm text-gray-500">
                                {user.email}
                            </p>
                        </div>

                        <div className="space-y-2">
                            {/* Profile Link */}
                            <Link
                                href="/profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 rounded-lg py-2 text-gray-700 hover:bg-gray-100"
                            >
                                <span>👤</span>
                                <span>আমার প্রোফাইল</span>
                            </Link>

                            {/* Sign Out */}
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="flex w-full items-center cursor-pointer gap-3 rounded-lg py-2 text-left text-red-500 hover:bg-red-50"
                            >
                                <span>↩</span>
                                <span>সাইন আউট</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileAction;
