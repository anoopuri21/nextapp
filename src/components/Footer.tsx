const links = [
  { label: 'Customer Success', href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-white">
      <div className="container mx-auto grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-semibold">NextApp</h2>
          <p className="mt-3 text-sm text-slate-300">
            Delivering curated services, industry insights, and scalable product partnerships for mid-size teams.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.label}>
                <a className="hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Contact</h3>
          <p className="mt-4 text-sm text-slate-300">hello@nextapp.io</p>
          <p className="text-sm text-slate-300">+1 (555) 010-2020</p>
          <div className="mt-4 flex gap-3 text-xs text-slate-300">
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
        <span>© 2025 NextApp. All rights reserved.</span>
        <span>Privacy · Terms · Security</span>
      </div>
    </footer>
  );
}
