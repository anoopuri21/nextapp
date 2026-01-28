export default function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h3 className="font-bold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}