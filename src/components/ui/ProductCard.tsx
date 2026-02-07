export default function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-slate-100 text-sm text-slate-500">
        Product preview
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-xl font-semibold text-emerald-600">{price}</p>
      <button className="mt-6 w-full rounded-full bg-slate-900 py-2 text-sm font-semibold text-white">
        View Details
      </button>
    </div>
  );
}
