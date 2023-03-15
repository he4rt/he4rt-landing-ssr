import Projects from './Projects';
import type { APPContributors } from '~/types/contributors';

export default function He4rt({
  contributors,
}: {
  contributors: APPContributors[];
}) {
  return (
    <>
      <img
        src='/images/background-heart.png'
        alt='Imagem com degradê roxo com a logo da He4rt Developers ao fundo desfocada'
        className='absolute right-0 w-full max-w-[70%] md:max-w-[50%]'
      />
      <header
        className='container relative mx-auto flex w-full flex-col items-center justify-between gap-6  px-10 pb-12 pt-28 lg:flex-row lg:py-[196px]'
        id='init'
      >
        <div className='flex w-full flex-col lg:w-1/2 lg:max-w-[544px]'>
          <h1 className='text-2xl font-bold font-spline md:text-4xl'>
            Feito pela{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade{' '}
            </span>
            <br /> para a{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade
            </span>
          </h1>
          <p className='w-full mt-4 text-base md:text-xl'>
            Aqui é o lugar aonde mentes extraordinárias se encontram com o
            objetivo de alcançar milhares de pessoas com o poder da tecnologia.{' '}
            <span className='font-semibold text-purple-500 dark:text-purple-700'>
              Aqui mais do que participar, você vai contribuir.
            </span>
          </p>
          <div className='mt-3'>
            <a
              rel='noopener noreferrer'
              href='https://discord.com/invite/5kwDQuv'
              target='_blank'
            >
              <button className='px-4 py-2 font-bold text-purple-500 transition-all bg-transparent border-2 border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white dark:border-purple-700 dark:text-purple-700 dark:hover:bg-purple-700 dark:hover:text-gray-998'>
                Seja um membro
              </button>
            </a>
          </div>
        </div>
        <div className='flex flex-col w-full lg:w-1/2'>
          <Projects contributors={contributors} />
        </div>
      </header>
    </>
  );
}
