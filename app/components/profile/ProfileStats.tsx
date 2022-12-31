import { useMemo } from 'react';

interface ProfileStatsProps {
  name: string;
  count: number | string;
  type: 'messages' | 'badges' | 'ranking';
}

export default function ProfileStats({ count, name, type }: ProfileStatsProps) {
  const TypeIcon = useMemo(
    () =>
      ({
        messages: MessagesIcon,
        badges: BadgesIcon,
        ranking: RankingIcon,
      }[type]),
    [type],
  );

  return (
    <div className='flex items-center space-x-3'>
      <div className='rounded-full bg-white p-4 shadow-md'>
        <TypeIcon />
      </div>
      <div className='flex flex-col items-start'>
        <span className='text-xl font-bold text-gray-900'>{count}</span>
        <span className='text-base text-gray-600'>{name}</span>
      </div>
    </div>
  );
}

const MessagesIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5 text-purple-500'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
    <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
  </svg>
);

const BadgesIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5 text-green-500'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
      clipRule='evenodd'
    />
  </svg>
);

const RankingIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-5 w-5 text-yellow-400'
    fill='currentColor'
    viewBox='0 0 14 15'
  >
    <path
      d='M6.41016 13.2561V9.88037L7.04983 9.98519L7.68951 9.88037V13.2561H6.41016Z'
      fill='currentColor'
    />
    <path
      d='M2.66025 1.72581C2.66025 1.72581 0.450945 0.621159 0.459008 2.78477C0.459008 2.78477 0.437507 4.69574 1.68461 6.26268C1.68461 6.26268 2.65756 7.64417 4.34276 8.17097C4.34276 8.17097 3.8751 7.45066 3.64127 6.90236C3.64127 6.90236 2.10927 6.03154 1.55829 4.23614C1.55829 4.23614 0.585331 1.7715 2.65756 2.6477V1.72581H2.66025Z'
      fill='currentColor'
    />
    <path
      d='M7.04848 9.98519C8.15851 9.98519 9.0804 8.98267 9.0804 8.98267C10.2227 7.82964 10.8462 5.87298 10.8462 5.87298C11.6606 3.74162 11.3623 0.446472 11.3623 0.446472H7.04848H2.732C2.732 0.446472 2.43635 3.74162 3.25073 5.87298C3.25073 5.87298 3.87428 7.83233 5.01656 8.98267C5.01656 8.98267 5.93845 9.98519 7.04848 9.98519Z'
      fill='currentColor'
    />
    <path
      d='M11.452 1.72581C11.452 1.72581 13.6614 0.621159 13.6533 2.78477C13.6533 2.78477 13.6748 4.69574 12.4277 6.26268C12.4277 6.26268 11.4547 7.64417 9.76953 8.17097C9.76953 8.17097 10.2372 7.45066 10.471 6.90236C10.471 6.90236 12.003 6.03154 12.554 4.23614C12.554 4.23614 13.527 1.7715 11.4547 2.6477V1.72581H11.452Z'
      fill='currentColor'
    />
    <path
      d='M10.8893 13.67H3.20508V14.7881H10.8893V13.67Z'
      fill='currentColor'
    />
    <path
      d='M8.36639 13.2562H5.73242V13.6701H8.36639V13.2562Z'
      fill='currentColor'
    />
  </svg>
);
