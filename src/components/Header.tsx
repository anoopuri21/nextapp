'use client';

import type { SiteSettings } from '@/lib/content';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type HeaderProps = {
  siteSettings: SiteSettings;
};

export default function Header({ siteSettings }: HeaderProps) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    if (!query) {
      return;
    }
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <header className="border-b border-slate-200 bg-slate-950 px-6 py-4 text-white">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={siteSettings.logoLight}
            alt={`${siteSettings.companyName} logo`}
            className="h-10 w-10 rounded-full bg-white p-2"
          />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Admin + Client Portal</p>
            <h1 className="text-2xl font-semibold">Unified Service Hub</h1>
          </div>
        </div>
        <form
          className="flex w-full max-w-md items-center gap-2 rounded-full bg-white/10 px-4 py-2"
          onSubmit={handleSubmit}
        >
          <span className="text-xs text-slate-400">Search</span>
          <input
            type="text"
            placeholder="Search services, products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
          />
        </form>
      </div>
    </header>
  );
}
