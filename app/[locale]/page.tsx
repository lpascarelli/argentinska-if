import Home from '@/components/home';
import Error from '@/components/ui/error';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { HOST } from '@/constants/urls';

export default async function HomePage() {
  const fetchHomeData = await fetch(`${HOST}/api/home`, {
    method: 'GET',
  });

  if (fetchHomeData && fetchHomeData.status === INTERNAL_SERVER_ERROR) {
    return <Error />;
  }

  const { carousel, ourValues } = await fetchHomeData.json();

  return <Home carousel={carousel} ourValues={ourValues} />;
}
