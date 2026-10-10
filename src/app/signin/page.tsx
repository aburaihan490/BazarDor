import Link from 'next/link';
import CredentialForm from './_components/signInForm';
import SocialSignIn from './_components/SocialSignIn';
const SignInPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center bg-[#f0f5f0] px-4 py-8 sm:py-10">
            <header className="mb-7 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-[#29332d] sm:text-[28px]">
                    সাইন ইন
                </h1>

                <p className="mt-1 text-sm text-[#737c74] sm:text-base">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে
                    ঢুকুন।
                </p>
            </header>

            <section className="w-full max-w-116.5 rounded-2xl border border-[#dce6dc] bg-[#fbfcfb] px-5 py-6 shadow-sm sm:px-6 sm:py-7">
                {/* Credentials Signin */}
                <CredentialForm />

                <div className="my-5 flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#dce4dc]" />
                    <span className="text-sm text-[#737c74]">অথবা</span>
                    <div className="h-px flex-1 bg-[#dce4dc]" />
                </div>

                {/* Social Login */}
                <SocialSignIn />

                <p className="mt-5 text-center text-sm text-[#29332d]">
                    অ্যাকাউন্ট নেই?{' '}
                    <Link
                        href="/signup"
                        className="font-medium text-[#108b45] hover:underline"
                    >
                        সাইন আপ করুন
                    </Link>
                </p>
            </section>

            <Link
                href="/"
                className="mt-6 py-1 text-sm text-[#737c74] transition hover:text-green-700"
            >
                ← হোম পেজে ফিরে যান
            </Link>
        </main>
    );
};

export default SignInPage;
