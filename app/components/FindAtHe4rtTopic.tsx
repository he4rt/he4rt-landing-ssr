import { SlGraduation } from 'react-icons/sl';

export type FindAtHe4rtProps = {
  title: string;
  description: string;
};

export default function FindAtHe4rtTopic({
  title,
  description,
}: FindAtHe4rtProps) {
  return (
    <div className='max-w-xl lg:max-w-sm'>
      <div className='flex gap-3 items-center'>
        <SlGraduation
          color='#782BF1'
          size={40}
          style={{
            background: 'rgba(120, 43, 241, 0.1)',
            borderRadius: '50%',
            padding: 10,
          }}
        />
        <h3 className='font-semibold text-[#424141] font-spline text-xl'>
          {title}
        </h3>
      </div>
      <p className='text-gray-750 font-dm mt-3'>{description}</p>
    </div>
  );
}
