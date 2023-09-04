import { notFound } from 'next/navigation';

import News from '@/components/news';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import axios from '@/helpers/axios';
import { loadNews } from '@/lib/news';

export default async function NewsPage() {
  const fetchNewsData = await loadNews();

  if (fetchNewsData && fetchNewsData.status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  const { news } = await fetchNewsData.json();
  const { title, description } = news;

  return <News title={title} description={description} />;
}
