import { notFound } from 'next/navigation';

import TheClub from '@/components/the-club';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { loadTheClubData } from '@/lib/the-club';

export default async function TheClubPage() {
  const fetchTheClubData = await loadTheClubData();
  const { history, management, status } = await fetchTheClubData.json();

  if (status && status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  return <TheClub history={history} management={management} />;
}
