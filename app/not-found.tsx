import { BiSolidErrorCircle } from 'react-icons/bi';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center gap-4'>
      <BiSolidErrorCircle size={64} />
      <p>
        Oops something went wrong while retrieving content. Please refresh the
        page or contact customer service
      </p>
    </div>
  );
}
