import { cookies } from 'next/headers';

import News from '@/components/news';
import { LOCALES } from '@/constants/languages';
import { NewsSkeleton } from '@/interfaces/contentful-api';
import { getOrCreateClient } from '@/utils';

export default async function NewsPage() {
  const locale = cookies().get('NEXT_LOCALE');
  const client = getOrCreateClient();
  const { items } = await client.getEntries<NewsSkeleton>({
    content_type: 'news',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });
  const { newsTitle, description } = items[0].fields;

  return <News title={newsTitle} description={description} />;
}
