import TheClub from '@/components/the-club';
import Error from '@/components/ui/error';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';

export default async function TheClubPage() {
  const fetchTheClubData = await fetch(
    `${process.env.HOST_ENVIRONMENT}/api/the-club`,
    {
      method: 'GET',
    }
  );

  if (fetchTheClubData && fetchTheClubData.status === INTERNAL_SERVER_ERROR) {
    return <Error />;
  }

  const { history, management } = await fetchTheClubData.json();

  return <TheClub history={history} management={management} />;
}
