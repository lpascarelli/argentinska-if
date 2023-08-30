import News from '@/components/news';
import { getEntry } from '@/contentful-client';
import { NewsSkeleton } from '@/interfaces/contentful-api';

export default async function NewsPage() {
  const newsSkeleton = await getEntry<NewsSkeleton>('news');

  if (newsSkeleton.ok) {
    const { newsTitle, description } = newsSkeleton.data.items[0].fields;

    return <News title={newsTitle} description={description} />;
  }
}
