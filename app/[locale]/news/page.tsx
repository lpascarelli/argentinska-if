import { notFound } from 'next/navigation';

import News from '@/components/news';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { loadNews } from '@/lib/news';

export default async function NewsPage() {
  const fetchNewsData = await loadNews();
  const { news, status } = await fetchNewsData.json();

  if (status && status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  const { title, description } = news;

  return <News title={title} description={description} />;
}
