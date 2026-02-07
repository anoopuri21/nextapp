import { notFound } from 'next/navigation';
import { getServiceById } from '@/lib/api';

export default async function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = await getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Service Detail</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{service.title}</h1>
        <p className="mt-4 text-base text-slate-600">{service.description}</p>
        <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-900">Delivery model</h2>
            <p className="mt-2">Dedicated pod with weekly sprints and outcome-based milestones.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-900">Ideal for</h2>
            <p className="mt-2">Product teams needing hands-on strategy and rapid execution.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
