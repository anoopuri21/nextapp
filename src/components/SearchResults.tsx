'use client';

import { useEffect, useState } from 'react';
import type { SearchResult } from '@/lib/search';
import ServiceCard from '@/components/ui/ServiceCard';
import ProductCard from '@/components/ui/ProductCard';
import BlogCard from '@/components/ui/BlogCard';

type SearchResultsProps = {
  query: string;
  results: SearchResult[];
};

export default function SearchResults({ query, results }: SearchResultsProps) {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (query && results.length === 0) {
      setShowDialog(true);
    }
  }, [query, results]);

  return (
    <div className="space-y-8">
      {showDialog ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">No results found</h3>
            <p className="mt-2 text-sm text-slate-600">
              We could not find any matches for "{query}". Try adjusting your search or explore the
              latest services and industries instead.
            </p>
            <button
              className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Search results</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">"{query}"</h1>
        <p className="mt-2 text-sm text-slate-600">{results.length} result(s) found</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result, index) => {
          if (result.type === 'service') {
            return (
              <ServiceCard
                key={`${result.type}-${result.item.id}-${index}`}
                title={result.item.title}
                description={result.item.description}
                href={`/services/${result.item.id}`}
              />
            );
          }
          if (result.type === 'product') {
            return (
              <div key={`${result.type}-${result.item.id}-${index}`} className="relative">
                <ProductCard name={result.item.name} price={result.item.price} />
                <span className="absolute right-4 top-4 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Product
                </span>
              </div>
            );
          }
          if (result.type === 'blog') {
            return (
              <div key={`${result.type}-${result.item.id}-${index}`} className="relative">
                <BlogCard title={result.item.title} excerpt={result.item.excerpt} date={result.item.date} />
                <span className="absolute right-4 top-4 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Blog
                </span>
              </div>
            );
          }
          return (
            <div
              key={`${result.type}-${result.item.id}-${index}`}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Industry
              </span>
              <h2 className="text-lg font-semibold text-slate-900">{result.item.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{result.item.overview}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
