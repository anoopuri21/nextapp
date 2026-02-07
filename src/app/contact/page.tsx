import ContactForm from '@/components/ContactForm';
import { getSiteSettings } from '@/lib/content';

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();

  return (
    <div className="container mx-auto space-y-10 px-4 py-10">
      <section className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-sm text-slate-200">
          We would love to hear about your goals, timelines, and priorities.
        </p>
        <div className="mt-6 grid gap-4 text-sm text-slate-200 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</p>
            <p className="mt-2 text-base font-semibold">{siteSettings.phone}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
            <p className="mt-2 text-base font-semibold">{siteSettings.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Contact Emails</p>
            <p className="mt-2 text-base font-semibold">{siteSettings.contactEmail1}</p>
            <p className="text-base font-semibold">{siteSettings.contactEmail2}</p>
          </div>
        </div>
      </section>

      <ContactForm contactEmail={siteSettings.contactEmail1} />
    </div>
  );
}
