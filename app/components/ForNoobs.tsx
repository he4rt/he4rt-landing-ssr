export default function ForNoobs() {
  return (
    <section className='relative bg-purple-500 drop-shadow-lg  before:bg-4noobs-pattern before:absolute before:w-full before:h-full before:opacity-25'>
      <div className='container px-10 w-full md:px-24 py-12 relative flex gap-64 h-full'>
        <div className='flex flex-col items-start justify-center w-full'>
          <span className='text-[#DDDDDD] text-xl font-bold'>
            Educação sem barreiras.
          </span>
          <h1 className='text-white text-2xl md:text-4xl font-medium mt-4 mb-2'>
            Conheça o <b>4Noobs</b>, uma biblioteca <b>com mais de 35</b> cursos
            open-source feita pela comunidade.
          </h1>
          <p className='text-[#D1D5DB] text-lg font-medium'>
            Com apoio de profissionais e estudantes apaixonados por tecnologia
            desenvolvemos a maior biblioteca open source do mundo para você
            aprender, aprimorar e contribuir seus conhecimentos.
          </p>
          <a
            className='block text-[#F3F3F3] font-bold mt-8 py-2 px-4 border-2 border-[#F3F3F3] rounded-xl'
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
