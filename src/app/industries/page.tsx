import { getIndustries } from '@/lib/api';

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Industries</h1>
        <p className="mt-3 text-sm text-slate-600">
          We support teams across regulated, digital-first, and emerging industries with tailored delivery
          playbooks.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div
            key={industry.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-slate-900">{industry.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{industry.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
