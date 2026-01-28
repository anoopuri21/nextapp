export default function  ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h3 className="font-bold">{name}</h3>
      <p>{price}</p>
    </div>
  );
}