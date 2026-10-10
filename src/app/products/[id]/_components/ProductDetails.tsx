import NotFound from '@/app/not-found';
import { SingleProduct } from '@/query/products';
import { ProductsType } from '@/types'; // নিশ্চিত করুন ProductsType সঠিক Path থেকে Import হচ্ছে

import { ArrowUp, ArrowDown, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
    const { id } = await params;
    const product: ProductsType = await SingleProduct({ id });

    // বাজারগুলোর সর্বনিম্ন ও সর্বোচ্চ দাম গণনা (যদি প্রডাক্ট থেকে পাওয়া যায়)
    const allMins = product.markets?.map((m) => m.min) || [];
    const allMaxs = product.markets?.map((m) => m.max) || [];
    const minPrice = allMins.length > 0 ? Math.min(...allMins) : product.today;
    const maxPrice = allMaxs.length > 0 ? Math.max(...allMaxs) : product.today;

    return (
        <>
            {!product ? (
                <NotFound />
            ) : (
                <>
                    {/* Breadcrumb Section */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium py-3 px-1 mb-4">
                        <Link
                            href="/"
                            className="hover:text-gray-900 transition-colors"
                        >
                            <Home className="w-4 h-4 text-gray-600" />
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <Link
                            href={`/products?category=${product.category}`}
                            className="hover:text-gray-900 transition-colors"
                        >
                            {product.categoryNameBn}
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900 font-semibold">
                            {product.nameBn}
                        </span>
                    </div>
                    <div className="space-y-6">
                        {/* Header Card Section */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 flex items-center justify-center p-2">
                                    {product.image ? (
                                        <span>{product.image}</span>
                                    ) : (
                                        <span className="text-3xl">🌾</span>
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {product.nameBn}
                                    </h1>
                                    <p className="text-sm font-medium text-gray-500 mt-1">
                                        প্রতি {product.unit} -{' '}
                                        {product.categoryNameBn ||
                                            product.category}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        গতকালের তুলনায় আজ দাম{' '}
                                        {product.change?.dir === 'up'
                                            ? 'বেড়েছে'
                                            : 'কমেছে'}{' '}
                                        •{' '}
                                        {Math.abs(
                                            product.today - product.yesterday,
                                        )}{' '}
                                        টাকা
                                    </p>
                                </div>
                            </div>

                            {/* Today's Price Highlight */}
                            <div className="bg-[#f7f9f7] rounded-xl p-4 text-center min-w-40 border border-gray-100/80">
                                <p className="text-xs font-semibold text-gray-600 mb-1">
                                    আজকের দাম
                                </p>
                                <div className="text-3xl font-extrabold text-gray-900">
                                    {product.today}
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    টাকা / {product.unit}
                                </p>
                                <div
                                    className={`inline-flex items-center gap-0.5 text-xs font-bold mt-1.5 ${
                                        product.change?.dir === 'up'
                                            ? 'text-red-500'
                                            : 'text-emerald-600'
                                    }`}
                                >
                                    {product.change?.dir === 'up' ? (
                                        <ArrowUp className="w-3.5 h-3.5 fill-current" />
                                    ) : (
                                        <ArrowDown className="w-3.5 h-3.5 fill-current" />
                                    )}
                                    <span>{product.change?.pct}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Summary Cards */}
                        <div>
                            <h2 className="text-base font-bold text-gray-900 mb-3 px-1">
                                দামের সারসংক্ষেপ
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Minimum Price */}
                                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">
                                            সর্বনিম্ন দাম
                                        </p>
                                        <p className="text-xl font-bold text-emerald-600 mt-2">
                                            {minPrice} টাকা
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-3">
                                        সবচেয়ে কম দামের বাজার
                                    </p>
                                </div>

                                {/* Maximum Price */}
                                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">
                                            সর্বাধিক দাম
                                        </p>
                                        <p className="text-xl font-bold text-red-500 mt-2">
                                            {maxPrice} টাকা
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-3">
                                        সবচেয়ে বেশি দামের বাজার
                                    </p>
                                </div>

                                {/* Average Price */}
                                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">
                                            গড় দাম
                                        </p>
                                        <p className="text-xl font-bold text-emerald-700 mt-2">
                                            {product.today} টাকা
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-3">
                                        প্রতি {product.unit}-এর হিসাবে
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Market Prices Table */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-5">
                            <h2 className="text-base font-bold text-gray-900 mb-4">
                                বাজারভিত্তিক আজকের দাম
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 text-gray-500 font-semibold text-xs">
                                            <th className="py-3 px-4 font-semibold">
                                                বাজার
                                            </th>
                                            <th className="py-3 px-4 font-semibold">
                                                বিভাগ
                                            </th>
                                            <th className="py-3 px-4 font-semibold text-center">
                                                সর্বনিম্ন
                                            </th>
                                            <th className="py-3 px-4 font-semibold text-center">
                                                সর্বাধিক
                                            </th>
                                            <th className="py-3 px-4 font-semibold text-right">
                                                গড়
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-gray-800">
                                        {product.markets &&
                                        product.markets.length > 0 ? (
                                            product.markets.map(
                                                (marketItem, idx) => {
                                                    const avg = (
                                                        (marketItem.min +
                                                            marketItem.max) /
                                                        2
                                                    ).toFixed(2);
                                                    return (
                                                        <tr
                                                            key={idx}
                                                            className="hover:bg-gray-50/80 transition-colors text-xs md:text-sm font-medium"
                                                        >
                                                            <td className="py-3.5 px-4 font-bold text-gray-900">
                                                                {
                                                                    marketItem.market
                                                                }
                                                            </td>
                                                            <td className="py-3.5 px-4 text-gray-600">
                                                                {
                                                                    marketItem.division
                                                                }
                                                            </td>
                                                            <td className="py-3.5 px-4 text-center">
                                                                {marketItem.min}{' '}
                                                                টাকা
                                                            </td>
                                                            <td className="py-3.5 px-4 text-center">
                                                                {marketItem.max}{' '}
                                                                টাকা
                                                            </td>
                                                            <td className="py-3.5 px-4 text-right font-bold text-gray-900">
                                                                {avg} টাকা
                                                            </td>
                                                        </tr>
                                                    );
                                                },
                                            )
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={5}
                                                    className="py-6 text-center text-gray-400"
                                                >
                                                    কোনো বাজার তথ্য পাওয়া যায়নি
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductDetails;
