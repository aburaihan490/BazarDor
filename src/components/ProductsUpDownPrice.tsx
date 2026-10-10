import { allProducts } from '@/query/products';
import { Suspense } from 'react';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

const ProductsUpDownPrice = async () => {
    const products = await allProducts();

    const upPrice = products
        .filter((pro) => pro.change.dir === 'up')
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);
    const downPrice = products
        .filter((pro) => pro.change.dir === 'down')
        .sort((a, b) => a.change.pct - b.change.pct)
        .slice(0, 6);
    return (
        <section className="max-w-7xl mx-auto">
            {/* Prducts Price Up */}
            <div>
                {' '}
                <h2 className="font-bold text-3xl ps-2.5">
                    {' '}
                    <span className="text-red-500">▲</span> আজ দাম বেড়েছে
                </h2>
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
                        {upPrice.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Suspense>
                </div>
            </div>

            {/*  Products Price Down */}
            <div className="mt-15">
                {' '}
                <h2 className="font-bold text-3xl ps-2.5">
                    {' '}
                    <span className="text-green-600">▼</span> আজ দাম কমেছে
                </h2>
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
                        {downPrice.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default ProductsUpDownPrice;
