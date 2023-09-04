import { notFound } from 'next/navigation';

import Home from '@/components/home';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { loadHomeData } from '@/lib/home';

export default async function HomePage() {
  const fetchHomeData = await loadHomeData();

  if (fetchHomeData && fetchHomeData.status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  const { carousel, ourValues } = await fetchHomeData.json();

  return <Home carousel={carousel} ourValues={ourValues} />;
}
