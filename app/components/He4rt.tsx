import Projects from './Projects';

export default function He4rt() {
  return (
    <>
      <img
        src='/images/background-heart.png'
        alt='Imagem com degradê roxo com a logo da He4rt Developers ao fundo desfocada'
        className='absolute top-0 right-0 max-w-[50%] w-full'
      />
      <header
        className='flex flex-col lg:flex-row container w-full mx-auto justify-between items-center relative gap-6 px-10 py-24 lg:py-[196px]'
        id='inicio'
      >
        <div className='flex flex-col w-full lg:w-1/2 lg:max-w-[544px]'>
          <h1 className='text-[#424141] font-bold tracking-[-0.02em] text-[36px] leading-[43px]'>
            Feito pela{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade{' '}
            </span>
            <br /> para a{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade
            </span>
          </h1>
          <p className='w-full text-gray-750 mt-4 text-[20px] leading-[30px] tracking-[-0.02em]'>
            Aqui é o lugar aonde mentes extraordinárias se encontram com o
            objetivo de alcançar milhares de pessoas com o poder da tecnologia.{' '}
            <span className='text-purple-500 dark:text-purple-700 font-semibold'>
              Aqui mais do que participar, você vai contribuir.
            </span>
          </p>
          <div className='mt-3'>
            <a
              rel='noopener noreferrer'
              href='https://discord.com/invite/5kwDQuv'
              target='_blank'
            >
              <button className='bg-transparent border-2 border-purple-500 dark:border-purple-700 rounded-lg px-4 py-2 font-bold text-purple-500 dark:text-purple-700 dark:hover:text-gray-998 dark:hover:bg-purple-700 hover:bg-purple-500 hover:text-white transition-all'>
                Seja um membro
              </button>
            </a>
          </div>
        </div>
        <div className='flex flex-col w-full lg:w-1/2'>
          {/* slider */}
          <Projects />
        </div>
      </header>
    </>
  );
}
