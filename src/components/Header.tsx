'use client'; // ← Client Component (because of search input)

import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="logo font-bold text-xl">LOGO</div>
      <input
        type="text"
        placeholder="Search services, products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-1 rounded text-black"
      />
    </header>
  );
}