export default function BlogCard({ title, excerpt, date }: { title: string; excerpt: string; date: string }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition cursor-pointer">
      <div className="bg-gray-200 h-32 mb-3"></div>
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm mt-2">{excerpt}</p>
      <a href="#" className="text-blue-600 text-sm mt-3 inline-block">Read More →</a>
    </div>
  );
}