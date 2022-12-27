import type { LinksFunction } from '@remix-run/node';
import He4rtSkills from '~/components/He4rtSkills';
import type { SkillsProps } from '~/components/He4rtSkills';
import Container from '~/components/Container';

const Skills: SkillsProps[] = [
  {
    title: 'Desenvolvendo Habilidades',
    description:
      'Ajude, contribua e retire suas dúvidas em qualquer área da tecnologia com nossa comunidade!',
  },
  {
    title: 'Networking',
    description:
      'Tenha oportunidade de conhecer milhares de pessoas com o mesmo interesse que você.',
  },
  {
    title: 'Eventos',
    description:
      'Participe dos eventos exclusivos da comunidade e receba diversos prêmios por isso!',
  },
  {
    title: 'Projetos',
    description:
      'Aprimore e contribua com nossos projetos, evolua constantemente e mostre suas habilidades.',
  },
];

export const links: LinksFunction = () => {
  return [
    {
      rel: 'prefetch',
      as: 'image',
      href: '/imgs/discord-print.png',
      type: 'image/png',
    },
  ];
};

export default function FindAtHe4rt() {
  return (
    <>
      <Container>
        <div className='mb-10'>
          <h2 className='text-gray-700 font-bold text-2xl'>
            O que eu encontrarei na{' '}
            <span className='text-purple-500'>He4rt?</span>
          </h2>
          <p className='text-[#737272] mt-3 font-dm max-w-5xl'>
            Nós temos os recursos para levar qualquer ideia para frente, nenhum
            sonho é louco demais para nós. Descubra como desenvolver projetos
            que revolucionam a maneira de aprender.
          </p>
        </div>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='flex flex-col gap-10'>
            {Skills.map((topic) => (
              <He4rtSkills key={topic.title} {...topic} />
            ))}
          </div>
          <div className='bg-gradient-to-r h-fit from-[#782BF1] to-[#A62BF1] mt-10 md:mt-0 py-10 rounded-xl md:rounded-l-xl px-10 md:relative -right-36'>
            <img
              className='w-[584px]'
              src='/images/discord-print.png'
              alt='discord-print'
            />
            <div className='text-[#f3f3f3] px-3'>
              <h3 className='font-spline text-semibold'>
                Venha participar do nosso Discord
              </h3>
              <p className='font-dm mt-3 max-w-[584px]'>
                Nós temos os recursos para levar qualquer ideia para frente,
                nenhum sonho é louco demais para nós.
              </p>
              <button className='bg-white text-base py-2 px-4 rounded-xl text-[#782BF1] font-semibold font-dm mt-5'>
                Entrar no Discord
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
