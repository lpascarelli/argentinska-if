import { EntryFieldTypes } from 'contentful';
import { cookies } from 'next/headers';

import TheClub from '@/components/the-club';
import { LOCALES } from '@/constants/languages';
import { getOrCreateClient } from '@/utils';

interface TheClubSkeleton {
  contentTypeId: 'theClub';
  fields: {
    title: EntryFieldTypes.Text;
    clubTitle: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
}

export default async function ClubPage() {
  const locale = cookies().get('NEXT_LOCALE');
  const client = getOrCreateClient();
  const { items } = await client.getEntries<TheClubSkeleton>({
    content_type: 'theClub',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });
  const { target } = items[0].fields.content.content[0].data;
  const textNodes = items[0].fields.content.content.slice(1);

  return (
    <TheClub
      mainTitle={items[0].fields.clubTitle}
      image={target}
      textNodes={textNodes}
    />
  );
}
