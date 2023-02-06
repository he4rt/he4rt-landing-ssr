import type { LinksFunction } from '@remix-run/node';
import He4rtSkills from '~/components/He4rtSkills';
import type { SkillsProps } from '~/components/He4rtSkills';
import Container from '~/components/Container';

const skills: SkillsProps[] = [
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
          <h2 className='text-2xl font-bold text-gray-700 md:text-4xl'>
            O que eu encontrarei na{' '}
            <span className='text-purple-500'>He4rt?</span>
          </h2>
          <p className='mt-3 max-w-5xl font-dm text-[#737272]'>
            Nós temos os recursos para levar qualquer ideia para frente, nenhum
            sonho é louco demais para nós. Descubra como desenvolver projetos
            que revolucionam a maneira de aprender.
          </p>
        </div>
        <div className='flex flex-col justify-between md:flex-row'>
          <div className='flex flex-col gap-10'>
            {skills.map((topic) => (
              <He4rtSkills key={topic.title} {...topic} />
            ))}
          </div>
          <div className='-right-36 mt-10 h-fit rounded-xl bg-gradient-to-r from-[#782BF1] to-[#A62BF1] py-10 px-10 md:relative md:mt-0 md:rounded-l-xl'>
            <img
              className='w-[584px]'
              src='/images/discord-print.png'
              alt='discord-print'
            />
            <div className='px-3 text-[#f3f3f3]'>
              <h3 className='font-spline font-semibold'>
                Venha participar do nosso Discord
              </h3>
              <p className='mt-3 mb-5 max-w-[584px] font-dm'>
                Nós temos os recursos para levar qualquer ideia para frente,
                nenhum sonho é louco demais para nós.
              </p>
              <a
                href='https://discord.gg/he4rt'
                target='_blank'
                rel='noreferrer noopener'
                className='rounded-xl bg-white py-2 px-4 font-dm text-base font-semibold text-[#782BF1]'
              >
                Entrar no Discord
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
