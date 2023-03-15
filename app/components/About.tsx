import Container from '~/components/Container';

export default function About() {
  return (
    <Container>
      <div className='md:row mb-14 md:mb-40 md:flex md:items-center' id='about'>
        <img
          src='/images/question.png'
          alt='Imagem ilustrativa de uma pessoa pensando'
          className='mb-4 md:mr-8'
        />
        <div className='flex flex-col'>
          <h2 className='mb-4 text-2xl font-bold font-spline md:mb-2 md:text-4xl'>
            Afinal, o que é a{' '}
            <span className='text-purple-500'>He4rt Developers?</span>
          </h2>
          <p className='text-lg font-medium mb-9 font-dm'>
            Temos como filosofia o ensino, tecnologia e as pessoas.{' '}
            <span className='text-purple-500'>
              Acreditamos que quando alinhados conseguimos mudar o mundo
            </span>
            . Descubra uma cultura colaborativa de crescimento, originalidade,
            apoio e inclusão que podem fazer a diferença na sua vida.{' '}
            <span className='text-purple-500'>
              Ajude a moldar nossa comunidade: faça parte dela.
            </span>
          </p>
          <h3 className='mb-2 text-xl font-bold font-spline md:text-2xl'>
            Como posso me juntar a{' '}
            <span className='text-purple-500'>He4rt?</span>
          </h3>
          <p className='text-lg font-medium font-dm'>
            Faça parte do nosso{' '}
            <a
              href='https://discord.gg/he4rt'
              target='_blank'
              className='text-purple-500'
              rel='noreferrer noopener'
            >
              Discord
            </a>{' '}
            e contribua com diversos projetos que podem mudar a maneira como as
            pessoas aprendem ao redor do mundo.{' '}
            <span className='text-purple-500'>
              Acompanhe a He4rt nas redes sociais
            </span>{' '}
            e descubra nossas iniciativas tecnológicas.
          </p>
        </div>
      </div>
    </Container>
  );
}
