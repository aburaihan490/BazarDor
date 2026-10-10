import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'BazarDor',
    description: 'বাজারের দাম এক নজরে',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" className={` h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Header />
                <Marquee />
                {children}
                <Footer />
            </body>
        </html>
    );
}
