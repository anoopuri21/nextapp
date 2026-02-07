export default function BlogCard({ title, excerpt, date }: { title: string; excerpt: string; date: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{date}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{excerpt}</p>
      <a href="#" className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700">
        Read More →
      </a>
    </div>
  );
}
