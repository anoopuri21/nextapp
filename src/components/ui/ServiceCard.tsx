import Link from 'next/link';

export default function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <span className="text-sm font-semibold">↗</span>
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {href ? (
        <Link
          href={href}
          className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View details →
        </Link>
      ) : null}
    </div>
  );
}
