import { navCategory } from '@/query/navCategory';
import { categoryProducts } from '@/query/products';
interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const CategoryHeaders = async ({ searchParams }: Props) => {
    const params = await searchParams;
    const categoryParam = params.category;
    const categorySlug = Array.isArray(categoryParam)
        ? categoryParam[0]
        : (categoryParam ?? '');
    const [products, categories] = await Promise.all([
        categoryProducts({ slug: categorySlug }),
        navCategory(),
    ]);

    const currentCategory = categories.find((cat) => cat.slug === categorySlug);
    return (
        <div className="flex min-h-19 items-center gap-3 rounded-xl border border-[#e1e9e2] bg-white/80 px-4 py-3 sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1f3ed] text-2xl">
                {currentCategory?.icon}
            </div>

            <div className="min-w-0">
                <h1 className="text-lg font-bold leading-6 text-[#263b30] sm:text-xl">
                    {currentCategory?.nameBn}
                </h1>

                <p className="mt-0.5 text-xs text-[#78837b] sm:text-sm">
                    {products.length}টি পণ্যের সাজানো তালিকা ও পরিবর্তন
                </p>
            </div>
        </div>
    );
};

export default CategoryHeaders;
