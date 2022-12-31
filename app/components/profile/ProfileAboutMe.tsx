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
      <div className='rounded-xl p-4 shadow-md'>{description}</div>
    </section>
  );
}
