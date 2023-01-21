import type { APPProfile } from '~/types/profile';

type ProfileBadgeProps = Pick<APPProfile, 'badgeInfo'>;

export default function ProfileBadge({ badgeInfo }: ProfileBadgeProps) {
  return (
    <section className='flex flex-col my-8 space-y-3'>
      <h1 className='text-base font-bold font-spline'>🏆 Conquistas</h1>
      <p className='text-base font-normal font-dm text-gray-775'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at elit ex.
        Nam diam metus, facilisis ut mollis vel, mollis at sapien.
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {badgeInfo?.map(({ id, badgePicture, name, description }) => (
          <div className='flex gap-6 p-4 shadow-md rounded-xl' key={id}>
            <img
              src={badgePicture}
              alt={`Imagem da consquista ${name}`}
              className='w-8 h-8 rounded-lg'
            />
            <div className='flex flex-col'>
              <p className='font-sans text-base font-bold'>{name}</p>
              <span className='text-sm font-normal font-dm text-gray-775'>
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
