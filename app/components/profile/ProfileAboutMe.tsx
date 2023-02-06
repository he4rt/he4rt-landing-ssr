interface ProfileAboutMeProps {
  description?: string;
}

export default function ProfileAboutMe({ description }: ProfileAboutMeProps) {
  if (!description) {
    return null;
  }

  return (
    <section className='flex flex-col space-y-3'>
      <h1 className='text-base font-bold font-spline'>Sobre mim</h1>
      <p className='p-4 text-base font-normal shadow-md rounded-xl font-dm text-gray-775'>
        {description}
      </p>
    </section>
  );
}
