import ProductDetails from './_components/ProductDetails';
import { Suspense } from 'react';

interface ProductDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
    return (
        <div className="bg-[#f2f5f2] min-h-screen py-6">
            <main className="mx-auto max-w-6xl px-4">
                <Suspense
                    fallback={
                        <div className="p-8 text-center text-gray-500">
                            লোড হচ্ছে...
                        </div>
                    }
                >
                    <ProductDetails params={params} />
                </Suspense>
            </main>
        </div>
    );
};

export default ProductDetailsPage;
