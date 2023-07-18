import Image from 'next/image';

import maleTeam from '@/public/images/teams/male-team.jpg';
import mixTeam from '@/public/images/teams/mix-team.jpg';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-5'>
        <Image
          priority
          src={maleTeam}
          alt='male-team'
          width={800}
          height={300}
        />
      </div>
      <div>
        <Image priority src={mixTeam} alt='mix-team' width={500} height={300} />
      </div>
    </div>
  );
}
