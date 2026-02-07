import ServiceCard from '@/components/ui/ServiceCard';
import { getServices } from '@/lib/api';

export default async function ServicesPage() {
  const services = await getServices(30);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
        <p className="mt-3 text-sm text-slate-600">
          Explore the full service catalog curated for scaling teams. Select a service to view the full
          scope and delivery model.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            href={`/services/${service.id}`}
          />
        ))}
      </div>
    </div>
  );
}
