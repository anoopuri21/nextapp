import { promises as fs } from 'fs';
import path from 'path';

export type AboutContent = {
  headline: string;
  summary: string;
  mission: string;
  vision: string;
  values: string[];
  highlights: { title: string; description: string }[];
};

export type SiteSettings = {
  companyName: string;
  logoLight: string;
  logoDark: string;
  phone: string;
  email: string;
  contactEmail1: string;
  contactEmail2: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
};

const defaultAbout: AboutContent = {
  headline: 'Building dependable digital ecosystems for growing teams',
  summary:
    'NextApp helps mid-size organizations orchestrate services, products, and industry insights through a single, dependable platform.',
  mission: 'Our mission is to simplify how teams discover, launch, and scale initiatives with clarity and speed.',
  vision:
    'We envision a connected operating system where every service, product, and industry insight is accessible in seconds.',
  values: [
    'Customer-first execution',
    'Data-informed decisions',
    'Transparent collaboration',
    'Continuous improvement',
  ],
  highlights: [
    {
      title: '12+ years of delivery',
      description: 'Serving product-led organizations across fintech, healthcare, and consumer tech.',
    },
    {
      title: '150+ launches',
      description: 'From MVPs to global rollouts, our team has delivered with measurable impact.',
    },
    {
      title: 'Always-on support',
      description: 'Dedicated success teams with clear SLAs, playbooks, and reporting.',
    },
  ],
};

const defaultSettings: SiteSettings = {
  companyName: 'NextApp',
  logoLight: '/next.svg',
  logoDark: '/next.svg',
  phone: '+1 (555) 010-2020',
  email: 'hello@nextapp.io',
  contactEmail1: 'puri.anoop21@gmail.com',
  contactEmail2: 'support@nextapp.io',
  socialLinks: {
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com',
    facebook: 'https://www.facebook.com',
  },
};

const dataDir = path.join(process.cwd(), 'data');

async function readJsonFile<T>(fileName: string, fallback: T): Promise<T> {
  try {
    const filePath = path.join(dataDir, fileName);
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw) as T;
  } catch (error) {
    console.warn(`Failed to read ${fileName}`, error);
    return fallback;
  }
}

export async function getAboutContent(): Promise<AboutContent> {
  return readJsonFile<AboutContent>('about.json', defaultAbout);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return readJsonFile<SiteSettings>('site-settings.json', defaultSettings);
}
