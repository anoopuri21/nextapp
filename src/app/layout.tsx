import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getSiteSettings } from '@/lib/content';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en">
      <body>
        <Header siteSettings={siteSettings} />
        <Navbar />
        <main>{children}</main> {/* Page content will render here */}
        <Footer siteSettings={siteSettings} />
      </body>
    </html>
  );
}
