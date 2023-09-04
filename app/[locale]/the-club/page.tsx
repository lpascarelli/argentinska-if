import { notFound } from 'next/navigation';

import TheClub from '@/components/the-club';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { loadTheClubData } from '@/lib/the-club';

export default async function TheClubPage() {
  const fetchTheClubData = await loadTheClubData();

  if (fetchTheClubData && fetchTheClubData.status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  const { history, management } = await fetchTheClubData.json();

  return <TheClub history={history} management={management} />;
}
