import { allProducts } from '@/query/products';
import ProductCard from './ProductCard';
import { Suspense } from 'react';
import ProductCardSkeleton from './ProductCardSkeleton';

const AllProducts = async () => {
    const products = await allProducts();
    return (
        <section id="allProducts" className="max-w-7xl mx-auto mt-15 mb-15">
            {/* Heading */}
            <div className="ps-2.5">
                <h2 className="text-[#1D271F] font-bold text-[28px] flex flex-col gap-y-1.5">
                    সব পণ্য
                    <span className="text-[rgba(29,39,31,0.7)] font-normal text-[14px]">
                        মোট {products.length}টি পণ্য দেখানো হচ্ছে
                    </span>
                </h2>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 px-2.5 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                <Suspense
                    fallback={
                        <>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </>
                    }
                >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Suspense>
            </div>
        </section>
    );
};

export default AllProducts;
