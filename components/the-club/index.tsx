'use client';

import History from '@/components/the-club/history';
import Management from '@/components/the-club/management';
import {
  History as HistoryInterface,
  Management as ManagementInterface,
} from '@/interfaces/the-club';

interface TheClubProps {
  history: HistoryInterface;
  management: ManagementInterface[];
}

export default function TheClub({ history, management }: TheClubProps) {
  return (
    <>
      <History history={history} />
      <hr className='border border-1 border-black my-16' />
      <Management management={management} />
    </>
  );
}
