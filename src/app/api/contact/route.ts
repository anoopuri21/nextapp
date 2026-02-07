import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { getSiteSettings } from '@/lib/content';

const dataDir = path.join(process.cwd(), 'data');
const submissionsPath = path.join(dataDir, 'contact-submissions.json');

function isValidEmail(value: string) {
  return /.+@.+\..+/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, subject, message } = payload ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 });
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    await fs.mkdir(dataDir, { recursive: true });
    let existing: typeof submission[] = [];
    try {
      const raw = await fs.readFile(submissionsPath, 'utf8');
      existing = JSON.parse(raw) as typeof submission[];
    } catch (error) {
      existing = [];
    }
    existing.unshift(submission);
    await fs.writeFile(submissionsPath, JSON.stringify(existing, null, 2));

    const siteSettings = await getSiteSettings();
    const recipient = siteSettings.contactEmail1 || siteSettings.email;

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipient,
          name,
          email,
          subject,
          message,
        }),
      });

      return NextResponse.json({ message: 'Thanks! Your message has been sent.' }, { status: 200 });
    }

    return NextResponse.json(
      {
        message:
          'Thanks! Your message has been recorded. Configure CONTACT_WEBHOOK_URL to deliver it by email.',
      },
      { status: 202 },
    );
  } catch (error) {
    console.error('Contact form error', error);
    return NextResponse.json({ message: 'Unable to send your message right now.' }, { status: 500 });
  }
}
