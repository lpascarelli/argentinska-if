import { notFound } from 'next/navigation';

import Home from '@/components/home';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { loadHomeData } from '@/lib/home';

export default async function HomePage() {
  const fetchHomeData = await loadHomeData();
  const { carousel, status } = await fetchHomeData.json();

  if (status && status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  return <Home carousel={carousel} />;
}
