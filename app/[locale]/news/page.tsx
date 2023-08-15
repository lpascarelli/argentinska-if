import { EntryFieldTypes } from 'contentful';
import { cookies } from 'next/headers';

import News from '@/components/news';
import { LOCALES } from '@/constants/languages';
import { getOrCreateClient } from '@/utils';

interface NewsSkeleton {
  contentTypeId: 'news';
  fields: {
    title: EntryFieldTypes.Text;
    newsTitle: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
}

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
