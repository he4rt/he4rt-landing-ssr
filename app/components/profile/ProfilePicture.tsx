import type { APPProfile } from '~/types/profile';

type ProfilePictureProps = Pick<
  APPProfile,
  'nickname' | 'level' | 'profilePicture'
>;

export default function ProfilePicture({
  profilePicture,
  nickname,
  level,
}: ProfilePictureProps) {
  return (
    <div className='absolute -top-16 inline-flex flex-col items-center'>
      <img
        src={profilePicture}
        alt={`Foto de ${nickname}`}
        className='h-28 w-28 rounded-full border-8 border-purple-600'
      />
      <div className='absolute -bottom-2 inline-block rounded-lg bg-gray-50 px-3 py-1 font-bold text-purple-500'>
        Lvl. {level}
      </div>
    </div>
  );
}
