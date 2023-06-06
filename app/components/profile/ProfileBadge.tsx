import type { BadgeInfo } from '~/types/profile';

export default function ProfileBadge({ badges }: { badges: BadgeInfo[] }) {
  return (
    <section className='flex flex-col my-8 space-y-3'>
      <h1 className='text-base font-bold font-spline'>🏆 Conquistas</h1>
      <p className='text-base font-normal font-dm text-gray-775 dark:text-gray-650'>
        Seção de conquistas referentes à gameficação do servidor e eventos
        externos.
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {badges?.map(({ name, description, image_url, role_id }) => (
          <div className='flex gap-6 p-4 shadow-md rounded-xl' key={role_id}>
            <img
              src={image_url ? image_url : '/images/default-badge.png'}
              alt={`Imagem da consquista ${name}`}
              className='w-8 h-8 rounded-lg'
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = '/images/default-badge.png';
              }}
            />
            <div className='flex flex-col'>
              <p className='font-sans text-base font-bold'>{name}</p>
              <span className='font-dm text-sm font-normal text-gray-775 dark:text-[#858A9B]'>
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
