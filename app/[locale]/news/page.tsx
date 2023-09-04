import News from '@/components/news';
import Error from '@/components/ui/error';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import axios from '@/helpers/axios';

export default async function NewsPage() {
  const fetchNewsData = await axios.get(`${process.env.BASE_URL!}/api/news`, {
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (fetchNewsData && fetchNewsData.status === INTERNAL_SERVER_ERROR) {
    return <Error />;
  }

  const { news } = fetchNewsData.data;
  const { title, description } = news;

  return <News title={title} description={description} />;
}
