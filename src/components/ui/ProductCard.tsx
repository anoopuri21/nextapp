export default function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition cursor-pointer">
      <div className="bg-gray-200 h-32 flex items-center justify-center mb-3">
        Image
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-lg font-semibold text-green-600">{price}</p>
      <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded">View Details</button>
    </div>
  );
}