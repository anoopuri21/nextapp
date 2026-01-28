import ServiceCard from '@/components/ui/ServiceCard';
import ProductCard from '@/components/ui/ProductCard';
import BlogCard from '@/components/ui/BlogCard';

// Fetch functions
async function getServices() {
  const res = await fetch('http://localhost/nextjs/nextapp/api/get_services.php', {
    cache: 'no-store', // disable cache for fresh data
  });
  return res.json();
}

async function getProducts() {
  const res = await fetch('http://localhost/nextjs/nextapp/api/get_products.php', {
    cache: 'no-store',
  });
  return res.json();
}

async function getBlogs() {
  const res = await fetch('http://localhost/nextjs/nextapp/api/get_blogs.php', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function HomePage() {
  // Fetch all data in parallel
  const [services, products, blogs] = await Promise.all([
    getServices(),
    getProducts(),
    getBlogs(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <section className="bg-blue-100 h-64 flex items-center justify-center mb-8 rounded">
        <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: any) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-100 p-8 text-center rounded">
        <h3 className="text-xl font-bold">Ready to get started?</h3>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
          Contact Us
        </button>
      </section>
    </div>
  );
}