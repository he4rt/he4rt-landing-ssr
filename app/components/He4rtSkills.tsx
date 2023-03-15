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
          className='rounded-full bg-purple-500/10 p-3 text-purple-500/80 dark:text-purple-500/100'
          size={40}
        />
        <h3 className='font-spline text-xl font-semibold'>{title}</h3>
      </div>
      <p className='mt-3 font-dm '>{description}</p>
    </div>
  );
}
