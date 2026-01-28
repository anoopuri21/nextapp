// Server Component (default) — we can fetch data here directly!
import ServiceCard from '@/components/ui/ServiceCard';
import BlogCard from '@/components/ui/BlogCard';
import ProductCard from '@/components/ui/ProductCard';

async function getServices() {
  const res = await fetch('http://localhost/my-website-backend/api/get_services.php', {
    cache: 'no-store', // disable cache for dynamic data
  });
  return res.json();
}

export default async function HomePage() {
  const services = await getServices(); // ← Server side fetch!

  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} title={service.title} desc={service.description} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <section className="bg-blue-100 h-64 flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to Our Website</h1>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockServices.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockBlogs.map(blog => (
            <BlogCard key={blog.id} {...blog} />
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