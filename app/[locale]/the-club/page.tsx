import TheClub from '@/components/the-club';
import Error from '@/components/ui/error';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { HOST } from '@/constants/urls';

export default async function TheClubPage() {
  const fetchTheClubData = await fetch(`${HOST}/api/the-club`, {
    method: 'GET',
  });

  if (fetchTheClubData && fetchTheClubData.status === INTERNAL_SERVER_ERROR) {
    return <Error />;
  }

  const { history, management } = await fetchTheClubData.json();

  return <TheClub history={history} management={management} />;
}
