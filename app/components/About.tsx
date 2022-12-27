export default function About() {
  return (
    <div className='md:flex md:row md:items-center mb-14 md:mb-40'>
      <img
        src='/images/question.png'
        alt='Imagem ilustrativa de uma pessoa pensando'
        className='md:mr-8 mb-4'
      />

      <div className='flex flex-col'>
        <h2 className='font-sans font-bold text-4xl text-gray-700 md:mb-2 mb-4'>
          Afinal, o que é a{' '}
          <span className='text-purple-500'>He4rt Developers?</span>
        </h2>
        <p className='font-dm font-medium text-lg text-gray-750 mb-9'>
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

        <h3 className='font-sans font-bold text-2xl text-gray-700 mb-2'>
          Como posso me juntar a <span className='text-purple-500'>He4rt?</span>
        </h3>
        <p className='font-dm font-medium text-lg text-gray-750'>
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
  );
}
