import type { APPProfile } from '~/types/profile';
import ProfileSeasonBadge from './ProfileSeasonBadge';

type ProfilePictureProps = Pick<
  APPProfile,
  'nickname' | 'level' | 'profilePicture' | 'seasonInfo'
>;

export default function ProfilePicture({
  profilePicture,
  nickname,
  level,
  ...seasonInfo
}: ProfilePictureProps) {
  return (
    <div className='absolute -top-16 inline-flex items-center justify-center '>
      <div className='relative flex flex-col items-center'>
        <img
          src={profilePicture}
          alt={`Foto de ${nickname}`}
          className='h-28 w-28 rounded-full border-8 border-purple-600'
        />
        <div className='absolute -bottom-2 inline-block rounded-lg bg-gray-50 px-3 py-1 font-bold text-purple-500'>
          Lvl. {level}
        </div>
      </div>
      <ProfileSeasonBadge {...seasonInfo} />
    </div>
  );
}
