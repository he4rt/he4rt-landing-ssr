export type PartnerCardProps = {
  name: string;
  specialty: string;
  description: string;
  contact: string;
  logo: string;
};

export default function PartnerCard({
  name,
  specialty,
  description,
  contact,
  logo,
}: PartnerCardProps) {
  return (
    <>
      <div className='flex gap-4 p-12 shadow-xl'>
        <img className='h-10 w-10' alt='partnerpicture' src={logo} />
        <div>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <h3 className='font-spline text-xl font-bold'>{name}</h3>
            <span className='dark:text-white/80'>{specialty}</span>
          </div>
          <p className='mt-2 mb-4 font-dm font-normal dark:text-white/80'>
            {description}
          </p>
          <a
            rel='noreferrer noopener'
            target='_blank'
            href={contact}
            className='block w-full rounded-lg bg-purple-500 p-2 text-center text-white'
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </>
  );
}
