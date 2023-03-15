import type { APPProfile } from '~/types/profile';

type ProfileBadgeProps = Pick<APPProfile, 'badgeInfo'>;

export default function ProfileBadge({ badgeInfo }: ProfileBadgeProps) {
  return (
    <section className='my-8 flex flex-col space-y-3'>
      <h1 className='font-spline text-base font-bold'>🏆 Conquistas</h1>
      <p className='font-dm text-base font-normal text-gray-775'>
        Seção de conquistas referentes à gameficação do servidor e eventos
        externos.
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {badgeInfo?.map(({ id, badgePicture, name, description }) => (
          <div className='flex gap-6 rounded-xl p-4 shadow-md' key={id}>
            <img
              src={badgePicture}
              alt={`Imagem da consquista ${name}`}
              className='h-8 w-8 rounded-lg'
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = '/images/default-badge.png';
              }}
            />
            <div className='flex flex-col'>
              <p className='font-sans text-base font-bold'>{name}</p>
              <span className='font-dm text-sm font-normal text-gray-775'>
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
