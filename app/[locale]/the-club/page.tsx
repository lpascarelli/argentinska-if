import { notFound } from 'next/navigation';

import TheClub from '@/components/the-club';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import axios from '@/helpers/axios';

export default async function TheClubPage() {
  const fetchTheClubData = await axios.get(
    `${process.env.BASE_URL!}/api/the-club`,
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  if (fetchTheClubData && fetchTheClubData.status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  const { history, management } = fetchTheClubData.data;

  return <TheClub history={history} management={management} />;
}
