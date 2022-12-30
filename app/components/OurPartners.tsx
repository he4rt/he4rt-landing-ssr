import PartnerCard from './PartnerCard';
import Container from '~/components/Container';

export default function OurPartners() {
  return (
    <Container>
      <div className='mb-11 text-center'>
        <h2 className='mb-2 font-spline text-4xl font-bold text-gray-700'>
          Nossos parceiros
        </h2>
        <p className='font-sans text-gray-750'>
          Nós temos os recursos para levar qualquer ideia para frente, nenhum
          sonho é louco demais para nós. Descubra como desenvolver projetos que
          revolucionam a maneira de aprender.
        </p>
      </div>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10 lg:gap-20'>
        <PartnerCard />
        <PartnerCard />
      </div>
    </Container>
  );
}
