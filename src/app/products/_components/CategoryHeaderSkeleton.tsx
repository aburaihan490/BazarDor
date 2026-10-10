const CategoryHeaderSkeleton = () => {
    return (
        <div className="flex min-h-19 items-center gap-3 rounded-xl border border-[#e1e9e2] bg-white/80 px-4 py-3 sm:px-6 animate-pulse">
            {/* Icon Skeleton */}
            <div className="h-10 w-10 shrink-0 rounded-full bg-[#e5e9e2]" />

            {/* Text Skeleton */}
            <div className="min-w-0 flex-1 space-y-2">
                {/* Category Name */}
                <div className="h-5 w-36 max-w-full rounded-md bg-[#e5e9e2] sm:h-6 sm:w-44" />

                {/* Product Count Description */}
                <div className="h-3 w-52 max-w-full rounded-md bg-[#edf0eb] sm:h-4 sm:w-64" />
            </div>
        </div>
    );
};

export default CategoryHeaderSkeleton;
