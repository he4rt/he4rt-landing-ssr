export default function SectionRecords() {
  return (
    <section
      className='container mx-auto flex flex-col gap-8 py-20 px-10'
      id='records'
    >
      <div className='flex flex-col items-start justify-between gap-6 md:gap-8 lg:flex-row'>
        <div className='flex flex-1 flex-col gap-4'>
          <h2 className='text-[36px] font-bold leading-[43px] text-gray-900'>
            Quebramos <span className='text-purple-600'>muitos recordes</span>
          </h2>

          <p className='text-base font-normal tracking-[-0.02em] text-gray-500 md:text-lg'>
            A inovação é liderada por pessoas que sabem o que fazem, sejam elas
            profissionais jovens em início de carreira ou especialistas com anos
            de experiência.
          </p>
          <p className='text-base font-normal tracking-[-0.02em] text-gray-500 md:text-lg'>
            A inovação é liderada por pessoas que sabem o que fazem, sejam elas
            profissionais jovens em início de carreira ou especialistas com anos
            de experiência.
          </p>
          <p className='text-base font-normal tracking-[-0.02em] text-gray-500 md:text-lg'>
            A inovação é liderada por pessoas que sabem o que fazem, sejam elas
            profissionais jovens em início de carreira ou especialistas
          </p>
        </div>

        <div className='grid w-full grid-cols-1 gap-2 text-center text-white sm:grid-cols-2 lg:w-fit lg:gap-4'>
          <div className='flex h-36 w-full flex-col items-center justify-center gap-2 rounded-lg bg-purple-500 lg:w-56'>
            <h3 className='text-[36px] font-bold leading-[43px]'>+13</h3>
            <p className='text-base font-medium text-gray-50'>Palestras</p>
          </div>
          <div className='flex h-36 w-full flex-col items-center justify-center gap-2 rounded-lg bg-purple-500 lg:w-56'>
            <h3 className='text-[36px] font-bold leading-[43px]'>+70,980</h3>
            <p className='text-base font-medium text-gray-50'>
              Espectadores Únicos
            </p>
          </div>
          <div className='flex h-36 w-full flex-col items-center justify-center gap-2 rounded-lg bg-purple-500 lg:w-56'>
            <h3 className='text-[36px] font-bold leading-[43px]'>+4,677</h3>
            <p className='text-base font-medium text-gray-50'>
              Espectadores Simutâneos
            </p>
          </div>
          <div className='flex h-36 w-full flex-col items-center justify-center gap-2 rounded-lg bg-purple-500 lg:w-56'>
            <h3 className='text-[36px] font-bold leading-[43px]'>+70,980</h3>
            <p className='text-base font-medium text-gray-50'>
              Espectadores ùnicos
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4'>
        <h2 className='text-[36px] font-bold leading-[43px] text-gray-900'>
          Outro título muito foda sobre eventos e tals,{' '}
          <span className='text-purple-600'>mano tem que dar duas linhas</span>{' '}
          tlgd.
        </h2>

        <p className='text-base font-normal tracking-[-0.02em] text-gray-500 md:text-lg'>
          A inovação é liderada por pessoas que sabem o que fazem, sejam elas
          profissionais jovens em início de carreira ou especialistas com anos
          de experiência. Na He4rt, o ensino não depende só de indivíduos
          brilhantes, mas de uma comunidade com foco no futuro, e não no
          passado. Promovemos essa cultura e damos espaço para essas pessoas
          assumirem responsabilidades com o mundo.
        </p>
      </div>
    </section>
  );
}
