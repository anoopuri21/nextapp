import BlogCard from '@/components/ui/BlogCard';
import ProductCard from '@/components/ui/ProductCard';
import ServiceCard from '@/components/ui/ServiceCard';
import { getBlogs, getProducts, getServices } from '@/lib/api';

export default async function HomePage() {
  const [services, products, blogs] = await Promise.all([
    getServices(),
    getProducts(),
    getBlogs(),
  ]);

  return (
    <div className="container mx-auto px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-16 text-white shadow-lg">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Next-Gen Platform</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Build smarter digital products with our service ecosystem
          </h1>
          <p className="mt-4 text-base text-blue-100 md:text-lg">
            Discover curated services, industry expertise, and product showcases built for mid-size teams.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-blue-700 shadow">
            Explore Services
          </button>
          <button className="rounded-full border border-white/60 px-6 py-2 text-sm font-semibold text-white">
            View Industries
          </button>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
          <a className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/services">
            View all
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              href={`/services/${service.id}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <a className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/products">
            Browse catalog
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Latest Blogs</h2>
          <a className="text-sm font-semibold text-blue-600 hover:text-blue-700" href="/blogs">
            Read more
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-900 px-6 py-12 text-white shadow-lg">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Ready to elevate your roadmap?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Partner with us to design, build, and scale the next generation of products.
            </p>
          </div>
          <button className="rounded-full bg-emerald-400 px-6 py-2 text-sm font-semibold text-slate-900 shadow">
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
