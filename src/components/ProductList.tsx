import EmptyCategory from '@/app/products/_components/EmptyCategory';
import ProductCard from '@/components/ProductCard';
import { navCategory } from '@/query/navCategory';
import { categoryProducts } from '@/query/products';
import Link from 'next/link';

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProductList = async ({ searchParams }: Props) => {
    const params = await searchParams;
    const categoryParam = params.category;
    const sortParam = params.sort;
    // const category = Array.isArray(categoryParam)
    //     ? categoryParam[0]
    //     : (categoryParam ?? '');
    // console.log(category);
    const sortBy = Array.isArray(sortParam) ? sortParam[0] : (sortParam ?? '');

    // category Products query
    const [products, categories] = await Promise.all([
        categoryProducts({ slug: categoryParam as string }),
        navCategory(),
    ]);
    const findCategory = categories.find((item) => item.slug === categoryParam);

    // sort Product
    const sortedProducts = products.toSorted((a, b) => {
        if (sortBy === 'price-asc') {
            return a.today - b.today;
        }
        if (sortBy === 'price-desc') {
            return b.today - a.today;
        }
        return 0; // Default order
    });

    return (
        <>
            <div className="mb-4">
                <h2 className="text-[rgba(29,39,31,0.7)]">
                    মোট {products.length}টি পণ্য দেখানো হচ্ছে
                </h2>
            </div>

            {findCategory?.slug !== categoryParam ? (
                <EmptyCategory />
            ) : categoryParam?.length === 0 ? (
                <Link href={'/'}>হোম পেজে ফিরে যান</Link>
            ) : (
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {sortedProducts.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductList;
