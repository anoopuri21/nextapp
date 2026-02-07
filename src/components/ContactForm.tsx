'use client';

import { useState } from 'react';

type ContactFormProps = {
  contactEmail: string;
};

type StatusState =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

export default function ContactForm({ contactEmail }: ContactFormProps) {
  const [status, setStatus] = useState<StatusState>({ type: 'idle' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message ?? 'Failed to send message.');
      }

      setStatus({ type: 'success', message: payload.message ?? 'Message sent successfully.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong.';
      setStatus({ type: 'error', message });
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
        <p className="mt-2 text-sm text-slate-600">
          Tell us what you need and we will respond within one business day. We are currently routing
          inquiries to <span className="font-semibold text-slate-900">{contactEmail}</span>.
        </p>
      </div>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Name
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Email
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label className="text-sm font-medium text-slate-700">
          Subject
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Message
          <textarea
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow"
          type="submit"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send message'}
        </button>
        {status.type === 'success' ? (
          <p className="text-sm text-emerald-600">{status.message}</p>
        ) : null}
        {status.type === 'error' ? (
          <p className="text-sm text-rose-600">{status.message}</p>
        ) : null}
      </form>
    </div>
  );
}
