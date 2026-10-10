'use client';

import { signIn } from '@/lib/auth-client';
import React from 'react';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

const CredentialForm = () => {
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData) as {
            email: string;
            password: string;
        };

        const { data, error } = await signIn.email({
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(error.message || 'Signin failed');
            return;
        }

        if (data) {
            toast.success('Login successful!');
            redirect('/');
        }
    };

    const inputClass =
        'mt-2 w-full rounded-[10px] border border-[#dce6dc] bg-transparent px-3 py-[11px] text-sm text-[#29332d] outline-none transition placeholder:text-[#354038] focus:border-green-600 focus:ring-2 focus:ring-green-100';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#29332d]"
                >
                    ইমেইল
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="text-sm font-medium text-[#29332d]"
                >
                    পাসওয়ার্ড
                </label>

                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="আপনার পাসওয়ার্ড"
                    className={inputClass}
                    minLength={8}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full cursor-pointer rounded-[10px] bg-[#108b45] px-4 py-3 text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#08783a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 active:translate-y-px"
            >
                সাইন ইন
            </button>
        </form>
    );
};

export default CredentialForm;
