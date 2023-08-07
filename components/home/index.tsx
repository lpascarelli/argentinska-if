import Image from 'next/image';

import Carousel from '@/components/ui/carousel';
import ImageContainer from '@/components/ui/carousel/image-container';
import maleTeam from '@/public/images/teams/male-team.jpg';
import mixTeam from '@/public/images/teams/mix-team.jpg';

export default function Home() {
  return (
    <div className='w-[25rem] sm:w-[60rem] mx-auto my-2'>
      <Carousel loop>
        <ImageContainer>
          <Image fill className='object-cover' src={maleTeam} alt='male-team' />
        </ImageContainer>
        <ImageContainer>
          <Image fill className='object-cover' src={mixTeam} alt='mix-team' />
        </ImageContainer>
      </Carousel>
    </div>
  );
}
