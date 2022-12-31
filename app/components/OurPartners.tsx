import PartnerCard from './PartnerCard';
import Container from '~/components/Container';

export default function OurPartners() {
  return (
    <Container>
      <div className='mx-auto mb-11 max-w-6xl text-center'>
        <h2 className='mb-2 font-spline text-4xl font-bold text-gray-700'>
          Nossos parceiros
        </h2>
        <p className='text-gray-750'>
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
