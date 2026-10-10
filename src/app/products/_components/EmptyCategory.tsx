import Link from 'next/link';
import { ArrowLeft, PackageSearch } from 'lucide-react';

interface EmptyCategoryProps {
    title?: string;
    description?: string;
}

const EmptyCategory = ({
    title = 'পেজটি খুঁজে পাওয়া যায়নি!',
    description = 'এই ক্যাটাগরিটি পাওয়া যায়নি।',
}: EmptyCategoryProps) => {
    return (
        <section className="flex min-h-[35vh] flex-col items-center justify-center px-4 py-16 text-center">
            {/* Icon */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f1f3ed]">
                <PackageSearch
                    className="h-10 w-10 text-[#78837b]"
                    strokeWidth={1.5}
                />
            </div>

            {/* 404 Text */}
            <p className="mb-2 text-sm font-bold tracking-[0.25em] text-[#78837b]">
                ERROR 404
            </p>

            <h1 className="text-2xl font-bold text-[#263b30] sm:text-3xl">
                {title}
            </h1>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#78837b] sm:text-base">
                {description}
            </p>

            {/* CTA */}
            <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#263b30] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3a5545] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263b30]"
            >
                <ArrowLeft className="h-4 w-4" />
                হোম পেজে ফিরে যান
            </Link>
        </section>
    );
};

export default EmptyCategory;
