import { EntryFieldTypes } from 'contentful';

import Home from '@/components/home';
import Loading from '@/components/ui/loading';
import { ContentfulImage } from '@/interfaces';
import { getOrCreateClient } from '@/utils';

interface CarouselSkeleton {
  contentTypeId: 'carousel';
  fields: {
    title: EntryFieldTypes.Text;
    carousel: Array<ContentfulImage>;
  };
}

export default async function HomePage() {
  const client = getOrCreateClient();
  const { items } = await client.getEntries<CarouselSkeleton>({
    content_type: 'carousel',
  });

  const carousel = items[0].fields.carousel as ContentfulImage[];

  return carousel ? (
    <Home carousel={carousel} />
  ) : (
    <div className='flex justify-center'>
      <Loading />
    </div>
  );
}
