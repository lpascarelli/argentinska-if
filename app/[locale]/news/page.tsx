import { EntryFieldTypes } from 'contentful';
import { cookies } from 'next/headers';

import Section from '@/components/ui/section';
import { LOCALES } from '@/constants/languages';
import H1 from '@/components/ui/h1';
import { getOrCreateClient } from '@/utils';

interface NewsSkeleton {
  contentTypeId: 'news';
  fields: {
    news: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
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
  const { title, description } = items[0].fields;

  return (
    <Section>
      <H1>{title}</H1>
      <p className='text-center'>{description}</p>
    </Section>
  );
}
