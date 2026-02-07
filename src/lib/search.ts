import { getBlogs, getIndustries, getProducts, getServices } from './api';
import type { Blog, Industry, Product, Service } from './api';

export type SearchResult =
  | { type: 'service'; item: Service }
  | { type: 'product'; item: Product }
  | { type: 'blog'; item: Blog }
  | { type: 'industry'; item: Industry };

export async function searchContent(query: string): Promise<SearchResult[]> {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  const [services, products, blogs, industries] = await Promise.all([
    getServices(50),
    getProducts(),
    getBlogs(),
    getIndustries(),
  ]);

  const matchesService = services.filter(
    (service) =>
      service.title.toLowerCase().includes(normalized) ||
      service.description.toLowerCase().includes(normalized),
  );
  const matchesProducts = products.filter((product) =>
    product.name.toLowerCase().includes(normalized),
  );
  const matchesBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(normalized) ||
      blog.excerpt.toLowerCase().includes(normalized),
  );
  const matchesIndustries = industries.filter(
    (industry) =>
      industry.name.toLowerCase().includes(normalized) ||
      industry.overview.toLowerCase().includes(normalized),
  );

  return [
    ...matchesService.map((item) => ({ type: 'service' as const, item })),
    ...matchesProducts.map((item) => ({ type: 'product' as const, item })),
    ...matchesBlogs.map((item) => ({ type: 'blog' as const, item })),
    ...matchesIndustries.map((item) => ({ type: 'industry' as const, item })),
  ];
}
