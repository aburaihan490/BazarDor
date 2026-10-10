import { ProductsType } from '@/types';
import Link from 'next/link';

interface Props {
    product: ProductsType;
}

const ProductCard = ({ product }: Props) => {
    return (
        <Link
            href={`/products/${product.id}`}
            className="border border-[#DDE4DE] rounded-xl p-3 bg-white hover:-translate-y-1 transition-all cursor-pointer"
        >
            <div className="flex items-center gap-3">
                {/* Image */}
                <div className="w-12 h-12 rounded-lg bg-[#F2F6F2] flex items-center justify-center">
                    {product?.image}
                </div>

                {/* Name */}
                <div>
                    <h3 className="font-semibold text-[#1D271F]">
                        {product?.nameBn}
                    </h3>

                    <p className="text-xs text-gray-500">প্রতি কেজি</p>
                </div>
            </div>

            {/* Price */}
            <div className="mt-3 flex justify-between items-end">
                <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>

                    <p className="text-lg font-bold text-[#1D271F]">
                        {product?.today} টাকা
                    </p>
                </div>
                <span
                    className={`${product.change.dir === 'up' ? 'text-red-500 font-bold' : 'text-green-600 font-bold'}`}
                >
                    {product.change.dir === 'up' ? '▲' : '▼'}{' '}
                    {product.change.pct}%
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;
