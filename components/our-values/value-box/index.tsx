import { IconType } from 'react-icons';

import Paragraph from '@/components/ui/paragraph';

interface ValueBoxProps {
  text: string;
  icon: IconType;
}

export default function ValueBox({ text, icon }: ValueBoxProps) {
  const Icon = icon;

  return (
    <div className='argentinska-bg flex flex-col items-center p-4 rounded-2xl sm:w-[24rem]'>
      <Icon className='mb-4 text-[#CCCCCC]' size={64} />
      <Paragraph className='text-[#CCCCCC]'>{text}</Paragraph>
    </div>
  );
}
