export default function SectionRecords() {
  return (
    <section
      className='flex flex-col container mx-auto py-20 px-10 gap-8'
      id='records'
    >
      <div className='flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8'>
        <div className='flex flex-col flex-1 gap-4'>
          <h2 className='text-[36px] leading-[43px] text-gray-900 font-bold'>
            Quebramos <span className='text-purple-600'>muitos recordes</span>
          </h2>

          <p className='text-base md:text-lg font-normal text-gray-500 tracking-[-0.02em]'>
            A inovação é liderada por pessoas que sabem o que fazem, sejam elas
            profissionais jovens em início de carreira ou especialistas com anos
            de experiência.
          </p>
          <p className='text-base md:text-lg font-normal text-gray-500 tracking-[-0.02em]'>
            A inovação é liderada por pessoas que sabem o que fazem, sejam elas
            profissionais jovens em início de carreira ou especialistas com anos
            de experiência.
          </p>
          <p className='text-base md:text-lg font-normal text-gray-500 tracking-[-0.02em]'>
            A inovação é liderada por pessoas que sabem o que fazem, sejam elas
            profissionais jovens em início de carreira ou especialistas
          </p>
        </div>

        <div className='grid w-full lg:w-fit grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 text-white text-center'>
          <div className='flex flex-col w-full lg:w-56 h-36 bg-purple-500 items-center justify-center rounded-lg gap-2'>
            <h3 className='text-[36px] leading-[43px] font-bold'>+13</h3>
            <p className='text-base text-gray-50 font-medium'>Palestras</p>
          </div>
          <div className='flex flex-col w-full lg:w-56 h-36 bg-purple-500 items-center justify-center rounded-lg gap-2'>
            <h3 className='text-[36px] leading-[43px] font-bold'>+70,980</h3>
            <p className='text-base text-gray-50 font-medium'>
              Espectadores Únicos
            </p>
          </div>
          <div className='flex flex-col w-full lg:w-56 h-36 bg-purple-500 items-center justify-center rounded-lg gap-2'>
            <h3 className='text-[36px] leading-[43px] font-bold'>+4,677</h3>
            <p className='text-base text-gray-50 font-medium'>
              Espectadores Simutâneos
            </p>
          </div>
          <div className='flex flex-col w-full lg:w-56 h-36 bg-purple-500 items-center justify-center rounded-lg gap-2'>
            <h3 className='text-[36px] leading-[43px] font-bold'>+70,980</h3>
            <p className='text-base text-gray-50 font-medium'>
              Espectadores ùnicos
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col flex-1 gap-4'>
        <h2 className='text-[36px] leading-[43px] text-gray-900 font-bold'>
          Outro título muito foda sobre eventos e tals,{' '}
          <span className='text-purple-600'>mano tem que dar duas linhas</span>{' '}
          tlgd.
        </h2>

        <p className='text-base md:text-lg font-normal text-gray-500 tracking-[-0.02em]'>
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
