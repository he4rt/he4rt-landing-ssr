import { SlGraduation } from 'react-icons/sl';

export type SkillsProps = {
  title: string;
  description: string;
};

export default function He4rtSkills({ title, description }: SkillsProps) {
  return (
    <div className='max-w-xl lg:max-w-sm'>
      <div className='flex items-center gap-3'>
        <SlGraduation
          className='rounded-full bg-purple-500/[0.1] p-3'
          color='#782BF1'
          size={40}
        />
        <h3 className='font-spline text-xl font-semibold text-[#424141]'>
          {title}
        </h3>
      </div>
      <p className='mt-3 font-dm text-gray-750'>{description}</p>
    </div>
  );
}
