export default function He4rt() {
  return (
    <>
      <header
        className='w-full lg:h-screen max-h-none md:max-h-[800px] max-w-7xl flex flex-col lg:flex-row items-center justify-between mx-auto'
        id='inicio'
      >
        <div className='flex flex-col max-w-5xl pr-6 lg:pb-11 mb-0 mt-1 lg:mt-0 pt-[100px] md:pt-0'>
          <h1 className='text-xl md:text-2xl lg:text-4xl text-[#424141] font-bold'>
            Feito pela{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade{' '}
            </span>
            <br /> para a{' '}
            <span className='text-purple-500 dark:text-purple-700'>
              comunidade
            </span>
          </h1>
          <p className='text-sm md:text-lg lg:text-xl font-sans font-medium	text-gray-750 my-4 lg:my-3 w-10/12 md:w-8/12 lg:w-6/12'>
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
      </header>
      <img
        src='/images/background-heart.png'
        alt='Imagem com degradê roxo com a logo da He4rt Developers ao fundo desfocada'
        className='absolute top-0 right-0 max-w-[65%] w-full'
      />
    </>
  );
}
