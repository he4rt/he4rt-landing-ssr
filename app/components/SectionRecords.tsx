export default function SectionRecords() {
  return (
    <section
      className='container mx-auto flex flex-col gap-8 py-20 px-10'
      id='records'
    >
      <div className='flex flex-col items-start justify-between gap-6 md:gap-8 lg:flex-row'>
        <div className='flex flex-1 flex-col gap-4'>
          <h2 className='text-2xl font-bold text-gray-900 md:text-4xl'>
            O acesso a <span className='text-purple-600'>educação</span> não é
            questão de sorte.
          </h2>

          <p className='text-base font-normal text-gray-500 md:text-lg'>
            Acreditamos que todos têm o direito de aprender e se desenvolver,
            independentemente de sua origem ou situação financeira. Por isso,
            lutamos para garantir que todos tenham acesso à educação acessível e
            de qualidade. Conheça nossos eventos He4rt Conf e He4rt Meetup que
            reune o melhor da tecnologia, educação, network e oportunidade em um
            só lugar: na comunidade.
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
        <h2 className='text-2xl font-bold text-gray-900 md:text-4xl'>
          Limites foram feitos para serem quebrados
        </h2>

        <p className='text-base font-normal text-gray-500 md:text-lg'>
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
