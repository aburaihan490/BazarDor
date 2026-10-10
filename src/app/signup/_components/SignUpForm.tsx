'use client';
import { signUp } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const SignUpForm = () => {
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    // handle signUp fuction
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData);

        if (user.password !== user.confirmPassword) {
            toast.error('দুটি পাসওয়ার্ড মিলছে না।');
            return;
        }

        // clean data
        delete user.confirmPassword;

        const newUser = { ...user };

        const { data, error } = await signUp.email({
            name: newUser.name as string,
            email: newUser.email as string,
            password: newUser.password as string,
        });

        if (error) {
            toast.error(error.message || 'Signup failed');
            return;
        }

        if (data) {
            toast.success('Account created successfully!');
            timeoutRef.current = setTimeout(() => {
                redirect('/signin');
            }, 1000);
        }
    };

    // time clean up fuction
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const inputClass =
        'mt-2 w-full rounded-[10px] border border-[#dce6dc] bg-transparent px-3 py-[11px] text-sm text-[#29332d] outline-none transition placeholder:text-[#354038] focus:border-green-600 focus:ring-2 focus:ring-green-100';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#29332d]"
                >
                    নাম
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="your name"
                    className={inputClass}
                    required
                />
            </div>

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
                    placeholder="কমপক্ষে ৮ অক্ষর"
                    className={inputClass}
                    minLength={8}
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-[#29332d]"
                >
                    পাসওয়ার্ড নিশ্চিত করুন
                </label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="আবার লিখুন"
                    className={inputClass}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-[10px] bg-[#108b45] px-4 py-3 text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#08783a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 active:translate-y-px cursor-pointer"
            >
                অ্যাকাউন্ট তৈরি করুন
            </button>
        </form>
    );
};

export default SignUpForm;
