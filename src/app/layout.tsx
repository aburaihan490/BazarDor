import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'BazarDor',
    description: 'বাজারের দাম এক নজরে',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" className={` h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Toaster
                    position="top-right"
                    gutter={8}
                    toastOptions={{
                        success: {
                            duration: 3000,
                            style: {
                                background: '#dcfce7',
                                color: '#166534',
                                border: '1px solid #86efac',
                            },
                            iconTheme: {
                                primary: '#16a34a',
                                secondary: '#fff',
                            },
                        },

                        error: {
                            duration: 4000,
                            style: {
                                background: '#fee2e2',
                                color: '#991b1b',
                                border: '1px solid #fca5a5',
                            },
                            iconTheme: {
                                primary: '#dc2626',
                                secondary: '#fff',
                            },
                        },
                    }}
                />
                <Header />
                <Marquee />
                {children}
                <Footer />
            </body>
        </html>
    );
}
