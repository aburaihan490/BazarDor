import AllProducts from '@/components/AllProducts';
import Banner from '@/components/Banner';
import ProductsUpDownPrice from '@/components/ProductsUpDownPrice';

export default async function Home() {
    return (
        <div className="bg-[#F0F5F0]">
            <Banner />
            <ProductsUpDownPrice />
            <AllProducts />
        </div>
    );
}
