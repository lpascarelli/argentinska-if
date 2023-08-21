import { cookies } from 'next/headers';

import TheClub from '@/components/the-club';
import { LOCALES } from '@/constants/languages';
import { getOrCreateClient } from '@/utils';
import {
  TheClubSkeleton,
  ManagementSkeleton,
} from '@/interfaces/contentful-api';
import { getYear } from '@/helpers';

export default async function ClubPage() {
  const locale = cookies().get('NEXT_LOCALE');
  const client = getOrCreateClient();
  const theClub = await client.getEntries<TheClubSkeleton>({
    content_type: 'theClub',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });
  const management = await client.getEntries<ManagementSkeleton>({
    content_type: 'management',
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });

  const { historyTitle } = theClub.items[0].fields;
  const historyImage =
    theClub.items[0].fields.historyContent.content[0].data.target;
  const historyTextNodes =
    theClub.items[0].fields.historyContent.content.slice(1);

  // const managerName = management.items[0].fields.title;
  // const { dateOfBirth, introduction } = management.items[0].fields;
  // const managerAvatar = management.items[0].fields.manager;

  return (
    <TheClub
      historyTitle={historyTitle}
      historyImage={historyImage}
      historyTextNodes={historyTextNodes}
    />
  );
}
