interface ProfileAboutMeProps {
  description?: string;
}

export default function ProfileAboutMe({ description }: ProfileAboutMeProps) {
  if (!description) {
    return null;
  }

  return (
    <section className='flex flex-col space-y-3'>
      <h1 className='font-spline text-base font-bold'>Sobre mim</h1>
      <p className='rounded-xl p-4 font-dm text-base font-normal text-gray-775 shadow-md'>
        {description}
      </p>
    </section>
  );
}
