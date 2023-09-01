import News from '@/components/news';
import Error from '@/components/ui/error';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';

export default async function NewsPage() {
  const fetchNewsData = await fetch(`${process.env.BASE_URL!}/api/news`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (fetchNewsData && fetchNewsData.status === INTERNAL_SERVER_ERROR) {
    return <Error />;
  }

  const { news } = await fetchNewsData.json();
  const { title, description } = news;

  return <News title={title} description={description} />;
}
