import Container from './Container';

export default function ContactBanner() {
  return (
    <section className='bg-gradient-to-r from-purple-500 to-[#8D3FFF] font-dm'>
      <Container>
        <div className='flex h-full w-full flex-col items-center justify-between md:flex-row'>
          <div className='flex max-w-xl flex-col gap-2 text-center md:text-start'>
            <h1 className='font-spline text-2xl font-semibold text-white'>
              Novas perspectivas geram novas oportunidades
            </h1>
            <h2 className='text-base font-normal text-white'>
              Junte-se a nós e revolucione a maneira de aprender. Seja
              patrocinador de sonhos e ajude milhares de pessoas a alcançarem
              seus objetivos.
            </h2>
          </div>
          <a
            href='/'
            target='_blank'
            className='mt-8 rounded-lg bg-white py-2 px-4 text-base font-bold text-purple-500 md:mt-0'
          >
            Entrar em contato
          </a>
        </div>
      </Container>
    </section>
  );
}
