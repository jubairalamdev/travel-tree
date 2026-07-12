import TourDetailsClient from '@/components/TourDetailsClient';

export default async function TourDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <TourDetailsClient tourId={id} />;
}
