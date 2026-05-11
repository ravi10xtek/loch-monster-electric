import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { service } = await params;
  const d = serviceDetails[service];
  if (!d) return {};
  return { title: d.seo.title, description: d.seo.description };
}

export function generateStaticParams() {
  return Object.entries(serviceDetails)
    .filter(([, v]) => v.parentHub === 'electrical-upgrades')
    .map(([k]) => ({ service: k }));
}

export default async function Page({ params }) {
  const { service } = await params;
  const d = serviceDetails[service];
  if (!d) notFound();
  return <ServiceDetailPage data={d} />;
}
