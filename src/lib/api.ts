import { demoBlogs, demoIndustries, demoProducts, demoServices } from './demo-data';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost/nextjs/nextapp/api';

async function fetchJson<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}/${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...(options.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export type Service = {
  id: number;
  title: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
};

export type Blog = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
};

export type Industry = {
  id: number;
  name: string;
  overview: string;
};

export async function getServices(limit = 6): Promise<Service[]> {
  try {
    return await fetchJson<Service[]>(`get_services.php?limit=${limit}`, {
      next: { revalidate: 120 },
    });
  } catch (error) {
    console.error('Failed to load services', error);
    return demoServices.slice(0, limit);
  }
}

export async function getServiceById(id: string): Promise<Service | null> {
  try {
    return await fetchJson<Service>(`get_service.php?id=${id}`, {
      next: { revalidate: 120 },
    });
  } catch (error) {
    console.error('Failed to load service detail', error);
    return demoServices.find((service) => String(service.id) === id) ?? null;
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    return await fetchJson<Product[]>('get_products.php', {
      next: { revalidate: 120 },
    });
  } catch (error) {
    console.error('Failed to load products', error);
    return demoProducts;
  }
}

export async function getBlogs(): Promise<Blog[]> {
  try {
    return await fetchJson<Blog[]>('get_blogs.php', {
      next: { revalidate: 120 },
    });
  } catch (error) {
    console.error('Failed to load blogs', error);
    return demoBlogs;
  }
}

export async function getIndustries(): Promise<Industry[]> {
  try {
    return await fetchJson<Industry[]>('get_industries.php', {
      next: { revalidate: 120 },
    });
  } catch (error) {
    console.error('Failed to load industries', error);
    return demoIndustries;
  }
}
