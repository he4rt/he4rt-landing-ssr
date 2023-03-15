import type { APPProfile } from '~/types/profile';

type ProfileSeasonBadgeProps = Pick<APPProfile, 'seasonInfo'>;

export default function ProfileSeasonBadge({
  seasonInfo,
}: ProfileSeasonBadgeProps) {
  if (!seasonInfo || !seasonInfo.rankingPosition || !seasonInfo.seasonName) {
    return <></>;
  }

  return (
    <span className='ml-8 flex items-center rounded-lg bg-white px-2 py-1 shadow-md'>
      <img className='mr-3 h-4' src='/assets/icons/trophy.png' alt='' />
      <span className='mr-1 font-bold text-gray-900'>
        S{seasonInfo.seasonName}
      </span>
      <span className='font-normal text-gray-700'>
        {' | '}
        {seasonInfo?.rankingPosition}º Lugar
      </span>
    </span>
  );
}
