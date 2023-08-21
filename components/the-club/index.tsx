'use client';

import { TopLevelBlock } from '@contentful/rich-text-types';

import History from '@/components/the-club/history';
import Management from '@/components/the-club/management';
import { ContentfulImage } from '@/interfaces';

interface TheClubProps {
  historyTitle: string;
  historyImage: ContentfulImage;
  historyTextNodes: TopLevelBlock[];
}

export default function TheClub({
  historyTitle,
  historyImage,
  historyTextNodes,
}: TheClubProps) {
  return (
    <main>
      <History
        historyTitle={historyTitle}
        historyImage={historyImage}
        historyTextNodes={historyTextNodes}
      />
      <hr className='m-4' />
      <Management />
    </main>
  );
}
