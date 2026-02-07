import { getAboutContent } from '@/lib/content';

export default async function AboutPage() {
  const content = await getAboutContent();

  return (
    <div className="container mx-auto space-y-12 px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 px-8 py-12 text-white shadow-lg">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">About NextApp</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{content.headline}</h1>
          <p className="mt-4 text-base text-indigo-100 md:text-lg">{content.summary}</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm animate-fade-up delay-150">
          <h2 className="text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-sm text-slate-600">{content.mission}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm animate-fade-up delay-200">
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-3 text-sm text-slate-600">{content.vision}</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm animate-fade-up delay-300">
          <h2 className="text-2xl font-semibold text-slate-900">What We Value</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {content.values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span className="mt-1 text-emerald-500">●</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {content.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up delay-500"
            >
              <h3 className="text-lg font-semibold text-slate-900">{highlight.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
