'use client';

import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { ProfileSkeleton } from './_components/ProfileSkeleton';

export default function ProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();
    const user = session?.user;

    const handleUpdateUser = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log('Update name:', user);
        const { data, error } = await updateUser({
            name: user.name as string,
        });
        if (error) {
            toast.error('নাম আপডেট করতে সমস্যা হয়েছে');
        }
        if (data?.status) {
            toast.success('প্রোফাইল সফলভাবে আপডেট হয়েছে! ');
        }
    };

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success('সফলভাবে সাইন-আউট করা হয়েছে');
                    router.push('/signin'); // সাইন-ইন পেজে রিডাইরেক্ট
                },
            },
        });
    };

    return (
        <main className="min-h-[60vh] bg-green-50/60 px-4 py-6 pt-11">
            {isPending ? (
                <ProfileSkeleton />
            ) : (
                <div className="mx-auto max-w-150">
                    {/* Heading */}
                    <h1 className="text-2xl font-bold text-gray-900">
                        আমার প্রোফাইল
                    </h1>
                    <p className="mt-1 text-sm text-gray-600">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>

                    {/* User card */}
                    <section className="mt-6 flex items-center justify-between rounded-2xl border border-gray-200 bg-white/80 p-5">
                        <div className="flex items-center gap-4">
                            <Image
                                src={
                                    user?.image ||
                                    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200'
                                }
                                width={48}
                                height={48}
                                alt={user?.name || 'User'}
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">
                                    {user?.name}
                                </h2>
                                <p className="text-sm text-gray-600">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-red-500 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 cursor-pointer"
                        >
                            <LogOut className="h-4 w-4 rotate-180" />
                            সাইন আউট
                        </button>
                    </section>

                    {/* Info card */}
                    <section className="mt-4 rounded-2xl border border-gray-200 bg-white/80 p-5">
                        <h3 className="text-base font-semibold text-gray-900">
                            তথ্য
                        </h3>

                        <form
                            onSubmit={handleUpdateUser}
                            className="mt-6 px-2 pb-2"
                        >
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-gray-900"
                            >
                                নাম
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={user?.name}
                                // onChange={(e) => setName(e.target.value)}
                                className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                            />

                            <button
                                type="submit"
                                className="mt-3 h-10 w-full rounded-lg bg-green-700 text-sm font-medium text-white shadow-md transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                            >
                                আপডেট
                            </button>
                        </form>
                    </section>
                </div>
            )}
        </main>
    );
}
