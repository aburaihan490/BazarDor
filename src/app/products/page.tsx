import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import ProductList from '@/components/ProductList';
import { Suspense } from 'react';
import CategoryHeaders from './_components/CategoryHeaders';
import SortProduct from './_components/SortProduct';
import CategoryHeaderSkeleton from './_components/CategoryHeaderSkeleton';

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProductPage = async ({ searchParams }: Props) => {
    return (
        <div className="bg-[#F0F5F0] pt-10 pb-18">
            <section className="mx-auto max-w-7xl space-y-4 px-4 py-2 sm:px-6">
                {/* Category Header */}
                <Suspense
                    fallback={
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CategoryHeaderSkeleton key={index} />
                            ))}
                        </div>
                    }
                >
                    <CategoryHeaders searchParams={searchParams} />
                </Suspense>

                {/* Sorting Toolbar */}
                <Suspense>
                    <SortProduct />
                </Suspense>

                <Suspense
                    fallback={
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>
                    }
                >
                    <ProductList searchParams={searchParams} />
                </Suspense>
            </section>
        </div>
    );
};

export default ProductPage;
