import type { APPProfile } from '~/types/profile';
import ProfileProgressBar from './ProfileProgressBar';
import ProfileSeasonBadge from './ProfileSeasonBadge';

type ProfilePictureProps = Pick<
  APPProfile,
  'nickname' | 'level' | 'profilePicture' | 'seasonInfo' | 'experience'
>;

export default function ProfilePicture({
  profilePicture,
  nickname,
  level,
  experience,
  ...seasonInfo
}: ProfilePictureProps) {
  return (
    <div className='absolute -top-16 inline-flex items-center justify-center '>
      <div className='relative flex flex-col items-center'>
        <ProfileProgressBar
          imageSrc={profilePicture}
          imageAlt={`Foto de ${nickname}`}
          percentage={experience}
        />

        <div className='absolute -bottom-2 inline-block rounded-lg bg-gray-50 px-3 py-1 font-bold text-purple-500'>
          Lvl. {level}
        </div>
      </div>
      <ProfileSeasonBadge {...seasonInfo} />
    </div>
  );
}
