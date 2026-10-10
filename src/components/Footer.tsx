const Footer = () => {
    return (
        <footer className="mx-auto w-full max-w-7xl px-4 py-6 text-[#1D271F] sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3 text-center text-sm font-bold sm:text-base md:flex-row md:justify-between md:gap-6 md:text-left">
                <h2 className="leading-6">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </h2>

                <h2 className="text-xs font-medium leading-5 text-gray-600 sm:text-sm md:max-w-md md:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত
                    হয়।
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
