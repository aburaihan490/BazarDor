import Image from 'next/image';
import CurrentTime from './CureentTime';
import Link from 'next/link';

const Banner = async () => {
    const date = await CurrentTime();
    return (
        <section className="py-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between rounded-3xl border border-green-100 bg-[#f8faf8] px-6 py-6 md:px-10 md:py-8">
                {/* Left Content */}
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <div className="mb-3 inline-flex rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                        {date}
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl font-bold leading-tight text-gray-800 md:text-4xl lg:text-5xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 md:text-lg">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    {/* CTA */}
                    <Link
                        href="#allProducts"
                        className="mt-7 inline-flex rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 hover:shadow-lg"
                    >
                        সব পণ্য দেখুন
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative hidden h-80 w-100 shrink-0 md:block">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজারের পণ্যের ঝুড়ি"
                        width={800}
                        height={800}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
