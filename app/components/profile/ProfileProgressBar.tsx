type ProfileProgressBarProps = {
  imageSrc: string;
  imageAlt: string;
  percentage: number;
};

export default function ProfileProgressBar({
  imageSrc,
  imageAlt,
  percentage,
}: ProfileProgressBarProps) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='relative h-28 w-28 rounded-full'>
        <img
          className='h-full w-full rounded-full border-[5px] border-purple-300'
          src={imageSrc}
          alt={imageAlt}
        />

        <svg
          viewBox='0 0 100 100'
          className='absolute inset-0 h-full w-full rotate-180 scale-[120%]'
        >
          <path
            className='stroke-purple-500 stroke-[5px]'
            id='progress'
            strokeLinecap='round'
            fill='none'
            strokeDasharray={`${(percentage / 100) * 251},251`}
            d='M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80'
          />
        </svg>
      </div>
    </div>
  );
}
