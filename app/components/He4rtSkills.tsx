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
          className='p-3 rounded-full bg-purple-500/10 text-purple-500/80 dark:text-purple-500/100'
          size={40}
        />
        <h3 className='text-xl font-semibold font-spline'>{title}</h3>
      </div>
      <p className='mt-3 font-dm '>{description}</p>
    </div>
  );
}
