import type { PartnerCardProps } from './PartnerCard';
import PartnerCard from './PartnerCard';
import Container from '~/components/Container';

const partners: PartnerCardProps[] = [
  {
    name: 'Sinergicon',
    specialty: 'Consultoria Financeira',
    contact: 'https://www.sinergicon.com.br',
    description:
      'Temos o propósito de trabalhar em Sinergia com nossos clientes, mais do que prestadores de serviços, a nossa missão é se tornar um parceiro de negócios e estar o mais próximo possível.',
    logo: '/images/partner-picture.png',
  },
];

export default function OurPartners() {
  return (
    <Container>
      <div className='mx-auto mb-11 max-w-6xl text-center' id='partners'>
        <h2 className='mb-2 font-spline text-4xl font-bold'>
          Nossos parceiros
        </h2>
        <p>
          Com o esforço de nossos parceiros estamos na missão de fazer o
          impossível. Juntos criamos soluções que mudará a maneira de aprender,
          garantindo oportunidade para todos. Faça parte dessa história, seja um
          parceiro.
        </p>
      </div>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10 lg:gap-20'>
        {partners.map((partner) => (
          <PartnerCard {...partner} key={`partner-key-${partner.name}`} />
        ))}
      </div>
    </Container>
  );
}
