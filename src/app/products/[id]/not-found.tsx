import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-linear-to-br from-slate-50 to-blue-50 px-4 py-10">
            <div className="w-full max-w-3xl text-center">
                {/* 404 Number */}
                <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight text-slate-800">
                    4<span className="text-blue-500">0</span>4
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-lg text-base sm:text-lg leading-7 text-slate-500">
                    Oops! The page you&apos;re looking for doesn&apos;t exist,
                    may have been moved, or is temporarily unavailable.
                </p>

                {/* Illustration */}
                <div className="relative mx-auto my-8 max-w-md">
                    <div className="absolute inset-0 rounded-full bg-blue-100/60 blur-3xl" />

                    <div className="relative rounded-3xl border border-white bg-white/70 p-8 shadow-sm">
                        <div
                            className="text-8xl"
                            role="img"
                            aria-label="Lost cat"
                        >
                            🐈
                        </div>
                        <p className="mt-3 text-sm font-medium text-slate-400">
                            Looks like you&apos;re lost!
                        </p>
                    </div>
                </div>

                {/* Home Button */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    <ArrowLeft />
                    Back to Home
                </Link>

                <p className="mt-8 text-sm text-slate-400">Error Code: 404</p>
            </div>
        </div>
    );
};

export default NotFound;
