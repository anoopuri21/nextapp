export default function BlogCard({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h3 className="font-bold">{title}</h3>
      <p>{excerpt}</p>
    </div>
  );
}