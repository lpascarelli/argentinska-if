import { notFound } from 'next/navigation';

import Home from '@/components/home';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import axios from '@/helpers/axios';

export default async function HomePage() {
  const fetchHomeData = await axios.get(`${process.env.BASE_URL!}/api/home`, {
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (fetchHomeData && fetchHomeData.status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  const { carousel, ourValues } = fetchHomeData.data;

  return <Home carousel={carousel} ourValues={ourValues} />;
}
