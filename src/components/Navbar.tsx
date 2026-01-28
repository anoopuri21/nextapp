'use client';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-6">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li className="group relative">
          <a href="#">Services ▼</a>
          <ul className="absolute hidden group-hover:block bg-gray-800 mt-2 p-2 rounded shadow-lg">
            <li><a href="/services/web-design">Web Design</a></li>
            <li><a href="/services/seo">SEO</a></li>
          </ul>
        </li>
        <li><a href="/products">Products</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}