import TheClub from '@/components/the-club';
import { getEntry } from '@/contentful-client';
import {
  TheClubSkeleton,
  ManagementSkeleton,
} from '@/interfaces/contentful-api';
import { getYear } from '@/helpers';
import { History, Management } from '@/interfaces/the-club';

export default async function ClubPage() {
  const [theClubSkeleton, managementSkeleton] = await Promise.all([
    getEntry<TheClubSkeleton>('theClub'),
    getEntry<ManagementSkeleton>('management'),
  ]);

  if (theClubSkeleton.ok && managementSkeleton.ok) {
    const history: History = {
      title: theClubSkeleton.data.items[0].fields.historyTitle,
      image:
        theClubSkeleton.data.items[0].fields.historyContent.content[0].data
          .target,
      textNodes:
        theClubSkeleton.data.items[0].fields.historyContent.content.slice(1),
    };

    const management: Management[] = managementSkeleton.data.items.map(
      (item) => {
        return {
          name: item.fields.title,
          year: getYear(item.fields.dateOfBirth),
          introduction: item.fields.introduction.toString(),
          avatar: item.fields.manager,
        };
      }
    );

    return <TheClub history={history} management={management} />;
  }
}
