export function ProfileSkeleton() {
    return (
        <div className="mx-auto max-w-150 animate-pulse">
            {/* Heading Skeleton */}
            <div className="h-8 w-44 rounded-md bg-gray-200" />
            <div className="mt-2 h-4 w-64 rounded-md bg-gray-200" />

            {/* User card Skeleton */}
            <section className="mt-6 flex items-center justify-between rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-xs">
                <div className="flex items-center gap-4">
                    {/* Avatar Skeleton */}
                    <div className="h-12 w-12 shrink-0 rounded-full bg-gray-200" />
                    <div className="space-y-2">
                        {/* Name & Email Skeleton */}
                        <div className="h-5 w-32 rounded-md bg-gray-200" />
                        <div className="h-4 w-48 rounded-md bg-gray-200" />
                    </div>
                </div>

                {/* Sign out button Skeleton */}
                <div className="h-9 w-24 rounded-lg bg-gray-200" />
            </section>

            {/* Info card Skeleton */}
            <section className="mt-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-xs">
                {/* Title Skeleton */}
                <div className="h-5 w-12 rounded-md bg-gray-200" />

                <div className="mt-6 px-2 pb-2">
                    {/* Label Skeleton */}
                    <div className="mb-2 h-4 w-10 rounded-md bg-gray-200" />

                    {/* Input Field Skeleton */}
                    <div className="h-10 w-full rounded-lg bg-gray-200" />

                    {/* Update Button Skeleton */}
                    <div className="mt-3 h-10 w-full rounded-lg bg-gray-200" />
                </div>
            </section>
        </div>
    );
}
