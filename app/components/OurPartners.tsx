import PartnerCard from './PartnerCard';
import Container from '~/components/Container';

export default function OurPartners() {
  return (
    <Container>
      <div className='text-center mb-11'>
        <h2 className='text-4xl text-gray-700 font-bold mb-2 font-spline'>
          Nossos parceiros
        </h2>
        <p className='text-gray-750 font-sans'>
          Nós temos os recursos para levar qualquer ideia para frente, nenhum
          sonho é louco demais para nós. Descubra como desenvolver projetos que
          revolucionam a maneira de aprender.
        </p>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-20 flex flex-col gap-10'>
        <PartnerCard />
        <PartnerCard />
      </div>
    </Container>
  );
}
