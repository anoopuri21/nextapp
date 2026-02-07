import type { Blog, Industry, Product, Service } from './api';

export const demoServices: Service[] = [
  {
    id: 1,
    title: 'Strategy & Discovery',
    description: 'Align stakeholders, validate opportunities, and define clear delivery milestones.',
  },
  {
    id: 2,
    title: 'Product Design',
    description: 'Human-centered design sprints that turn insights into launch-ready experiences.',
  },
  {
    id: 3,
    title: 'Engineering Delivery',
    description: 'Full-stack delivery teams to build, test, and ship at scale.',
  },
  {
    id: 4,
    title: 'Data & Analytics',
    description: 'Instrumentation, dashboards, and experimentation frameworks for measurable growth.',
  },
  {
    id: 5,
    title: 'Cloud Enablement',
    description: 'Modernize infrastructure with secure, resilient, and cost-aware architecture.',
  },
  {
    id: 6,
    title: 'Customer Success',
    description: 'Enablement programs, training, and playbooks to drive adoption.',
  },
];

export const demoProducts: Product[] = [
  { id: 1, name: 'Pulse CRM Suite', price: '$249 / month' },
  { id: 2, name: 'Atlas Analytics', price: '$179 / month' },
  { id: 3, name: 'FlowOps Automation', price: '$299 / month' },
  { id: 4, name: 'Nimbus Inventory', price: '$139 / month' },
  { id: 5, name: 'Signal Marketing Hub', price: '$219 / month' },
  { id: 6, name: 'Core HR Platform', price: '$159 / month' },
];

export const demoBlogs: Blog[] = [
  {
    id: 1,
    title: 'How mid-size teams modernize delivery without slowing down',
    excerpt: 'A practical blueprint for scaling delivery while keeping decision-making fast.',
    date: 'Feb 20, 2025',
  },
  {
    id: 2,
    title: 'Building measurable service catalogs',
    excerpt: 'Turn internal services into a productized experience for stakeholders.',
    date: 'Feb 12, 2025',
  },
  {
    id: 3,
    title: 'What we learned from 150+ launches',
    excerpt: 'Patterns, pitfalls, and playbooks that keep launches on track.',
    date: 'Jan 30, 2025',
  },
];

export const demoIndustries: Industry[] = [
  {
    id: 1,
    name: 'Fintech & Payments',
    overview: 'Secure platforms and compliance-ready workflows for digital finance teams.',
  },
  {
    id: 2,
    name: 'Healthcare',
    overview: 'HIPAA-ready solutions that improve operational efficiency and patient journeys.',
  },
  {
    id: 3,
    name: 'Retail & Commerce',
    overview: 'Unified commerce experiences with real-time inventory and omnichannel strategy.',
  },
  {
    id: 4,
    name: 'Logistics',
    overview: 'Automation and visibility for last-mile and supply chain operations.',
  },
  {
    id: 5,
    name: 'SaaS Platforms',
    overview: 'Go-to-market enablement and retention-focused product improvements.',
  },
  {
    id: 6,
    name: 'Public Sector',
    overview: 'Digital services modernization with accessible, citizen-first experiences.',
  },
];
