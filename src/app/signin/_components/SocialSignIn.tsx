'use client';

import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const SocialSignIn = () => {
    const handleSocialSignIn = async (provider: 'google' | 'github') => {
        try {
            await authClient.signIn.social(
                {
                    provider,
                    callbackURL: '/',
                },
                // {
                //     onSuccess: () => {
                //         toast.success('রিডাইরেক্ট করা হচ্ছে...', {
                //             id: 'social-signin',
                //         });
                //     },
                //     onError: (ctx) => {
                //         toast.error(
                //             ctx.error.message || 'সাইন-ইন ব্যর্থ হয়েছে!',
                //             { id: 'social-signin' },
                //         );
                //     },
                // },
            );
        } catch (error) {
            console.error(`${provider} sign in failed:`, error);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
                type="button"
                onClick={() => handleSocialSignIn('google')}
                className="flex min-h-10 items-center justify-center gap-2 rounded-[10px] border border-[#dce6dc] px-2 py-2.5 text-sm font-semibold text-[#29332d] transition hover:bg-[#f0f5f0] cursor-pointer"
            >
                <svg
                    viewBox="0 0 48 48"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                >
                    <path
                        fill="#4285F4"
                        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                    />
                    <path
                        fill="#34A853"
                        d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.5H5.8V33A20 20 0 0 0 24 44Z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.4H5.8a20 20 0 0 0 0 18l6.8-5.4Z"
                    />
                    <path
                        fill="#EA4335"
                        d="M24 11.9c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.8 29.5 4 24 4A20 20 0 0 0 5.8 15l6.8 5.4c1.6-4.9 6.1-8.5 11.4-8.5Z"
                    />
                </svg>
                <span>Google দিয়ে চালিয়ে যান</span>
            </button>

            <button
                type="button"
                onClick={() => handleSocialSignIn('github')}
                className="flex min-h-10 items-center justify-center gap-2 rounded-[10px] border border-[#dce6dc] px-2 py-2.5 text-sm font-semibold text-[#29332d] transition hover:bg-[#f0f5f0] cursor-pointer"
            >
                <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 fill-current"
                    aria-hidden="true"
                >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.3 3.9 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                <span>GitHub দিয়ে চালিয়ে যান</span>
            </button>
        </div>
    );
};

export default SocialSignIn;
