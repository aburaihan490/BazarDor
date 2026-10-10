import { allProducts } from '@/query/products';
import { ProductsType } from '@/types';
import Link from 'next/link';
import { Suspense } from 'react';

const Marquee = async () => {
    const products: ProductsType[] = await allProducts();

    return (
        <div className="z-50 bg-gray-100 border-y border-gray-200 overflow-hidden">
            <div className="flex animate-marquee relative py-2">
                <Suspense fallback={<h3>Loading</h3>}>
                    {products.map((product) => (
                        <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="shrink-0 px-5 border-r border-gray-200"
                        >
                            <span className="inline-flex items-center gap-2 whitespace-nowrap">
                                {/* Icon */}
                                <span>{product.categoryIcon}</span>

                                {/* Product name */}
                                <span className="text-sm font-medium text-gray-700">
                                    {product.nameBn}
                                </span>

                                {/* Price */}
                                <span className="text-sm text-gray-600">
                                    {product.today} টাকা/কেজি
                                </span>

                                {/* Change */}
                                <span
                                    className={
                                        product.change.dir === 'up'
                                            ? 'text-red-500'
                                            : 'text-green-600'
                                    }
                                >
                                    {product.change.dir === 'up' ? '▲' : '▼'}{' '}
                                    {product.change.pct}%
                                </span>
                            </span>
                        </Link>
                    ))}
                </Suspense>
            </div>
        </div>
    );
};

export default Marquee;
