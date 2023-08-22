import { cookies } from 'next/headers';

import TheClub from '@/components/the-club';
import { LOCALES } from '@/constants/languages';
import {
  TheClubSkeleton,
  ManagementSkeleton,
} from '@/interfaces/contentful-api';
import { getYear } from '@/helpers';
import { History, Management } from '@/interfaces/the-club';
import { getOrCreateClient } from '@/utils';

export default async function ClubPage() {
  const locale = cookies().get('NEXT_LOCALE');
  const client = getOrCreateClient();
  const theClub = await client.getEntries<TheClubSkeleton>({
    content_type: 'theClub',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });
  const managementSkeleton = await client.getEntries<ManagementSkeleton>({
    content_type: 'management',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });

  const history: History = {
    title: theClub.items[0].fields.historyTitle,
    image: theClub.items[0].fields.historyContent.content[0].data.target,
    textNodes: theClub.items[0].fields.historyContent.content.slice(1),
  };

  const management: Management[] = managementSkeleton.items.map((item) => {
    return {
      name: item.fields.title,
      year: getYear(item.fields.dateOfBirth),
      introduction: item.fields.introduction.toString(),
      avatar: item.fields.manager,
    };
  });

  return <TheClub history={history} management={management} />;
}
