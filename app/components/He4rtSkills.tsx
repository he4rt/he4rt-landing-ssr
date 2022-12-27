import { SlGraduation } from 'react-icons/sl';

export type SkillsProps = {
  title: string;
  description: string;
};

export default function He4rtSkills({ title, description }: SkillsProps) {
  return (
    <div className='max-w-xl lg:max-w-sm'>
      <div className='flex gap-3 items-center'>
        <SlGraduation
          className='rounded-full p-3 bg-purple-500/[0.1]'
          color='#782BF1'
          size={40}
        />
        <h3 className='font-semibold text-[#424141] font-spline text-xl'>
          {title}
        </h3>
      </div>
      <p className='text-gray-750 font-dm mt-3'>{description}</p>
    </div>
  );
}
