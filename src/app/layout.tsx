import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <main>{children}</main> {/* Page content will render here */}
        <Footer />
      </body>
    </html>
  );
}