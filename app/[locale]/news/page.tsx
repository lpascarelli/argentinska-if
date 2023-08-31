import News from '@/components/news';
import Error from '@/components/ui/error';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { HOST } from '@/constants/urls';

export default async function NewsPage() {
  const fetchNewsData = await fetch(`${HOST}/api/news`, { method: 'GET' });

  if (fetchNewsData && fetchNewsData.status === INTERNAL_SERVER_ERROR) {
    return <Error />;
  }

  const { news } = await fetchNewsData.json();
  const { title, description } = news;

  return <News title={title} description={description} />;
}
