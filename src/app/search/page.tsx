import SearchResults from '@/components/SearchResults';
import { searchContent } from '@/lib/search';

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query ?? '';
  const results = await searchContent(query);

  return (
    <div className="container mx-auto px-4 py-10">
      <SearchResults query={query} results={results} />
    </div>
  );
}
