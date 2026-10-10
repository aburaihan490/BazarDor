const ProductCardSkeleton = () => {
    return (
        <div className="border border-[#DDE4DE] rounded-xl p-3 bg-white">
            {/* Image + Name Skeleton */}
            <div className="flex items-center gap-3">
                {/* Image */}
                <div className="w-12 h-12 rounded-lg bg-gray-200 animate-pulse shrink-0" />

                {/* Name */}
                <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
                    <div className="h-3 w-1/2 rounded bg-gray-200 animate-pulse" />
                </div>
            </div>

            {/* Price Skeleton */}
            <div className="mt-3 flex justify-between items-end">
                <div className="space-y-2">
                    <div className="h-3 w-20 rounded bg-gray-200 animate-pulse" />
                    <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
                </div>

                {/* Price Change */}
                <div className="h-4 w-12 rounded bg-gray-200 animate-pulse" />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
