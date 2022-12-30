export default function ForNoobs() {
  return (
    <section className='relative bg-purple-500 drop-shadow-lg  before:absolute before:h-full before:w-full before:bg-4noobs-pattern before:opacity-25'>
      <div className='container relative flex h-full w-full gap-64 px-10 py-12 md:px-24'>
        <div className='flex w-full flex-col items-start justify-center'>
          <span className='text-xl font-bold text-[#DDDDDD]'>
            Educação sem barreiras.
          </span>
          <h1 className='mt-4 mb-2 text-2xl font-medium text-white md:text-4xl'>
            Conheça o <b>4Noobs</b>, uma biblioteca <b>com mais de 35</b> cursos
            open-source feita pela comunidade.
          </h1>
          <p className='text-lg font-medium text-[#D1D5DB]'>
            Com apoio de profissionais e estudantes apaixonados por tecnologia
            desenvolvemos a maior biblioteca open source do mundo para você
            aprender, aprimorar e contribuir seus conhecimentos.
          </p>
          <a
            className='mt-8 block rounded-xl border-2 border-[#F3F3F3] py-2 px-4 font-bold text-[#F3F3F3]'
            href='https://github.com/he4rt/4noobs'
            target='_blank'
          >
            Conhecer o 4Noobs
          </a>
        </div>
        <img
          src='/brands/4noobs-vertical.svg'
          alt='Logo do 4Noobs'
          className='hidden md:block md:h-96'
        />
      </div>
    </section>
  );
}
