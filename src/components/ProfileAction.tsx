'use client';
import Link from 'next/link';
import { useState } from 'react';

const ProfileAction = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            {!isLoggedIn ? (
                <>
                    <Link
                        href={'/signin'}
                        className="rounded-lg md:px-4 md:py-2 text-xs font-medium"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href={'/signup'}
                        className="rounded-lg bg-black px-5 py-2 text-sm
                           font-medium text-white"
                    >
                        সাইন আপ
                    </Link>
                </>
            ) : (
                <>
                    <button className="rounded-lg px-4 py-2">
                        👤 প্রোফাইল
                    </button>

                    <button
                        onClick={() => setIsLoggedIn(false)}
                        className="rounded-lg border px-4 py-2"
                    >
                        সাইন আউট
                    </button>
                </>
            )}
        </>
    );
};

export default ProfileAction;
