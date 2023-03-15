import PartnerCard from './PartnerCard';
import Container from '~/components/Container';

export default function OurPartners() {
  return (
    <Container>
      <div className='max-w-6xl mx-auto text-center mb-11' id='partners'>
        <h2 className='mb-2 text-4xl font-bold font-spline'>
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
        <PartnerCard />
        <PartnerCard />
      </div>
    </Container>
  );
}
