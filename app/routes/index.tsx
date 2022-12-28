import type { LinksFunction } from '@remix-run/node';

import About from '~/components/About';
import FindAtHe4rtSection from '~/components/FindAtHe4rtSection';
import Footer from '~/components/Footer';
import He4rt from '~/components/He4rt';
import OurPartners from '~/components/OurPartners';
import Staff from '~/components/Staff';

import ForNoobs from '~/components/ForNoobs';
import Container from '~/components/Container';
export const links: LinksFunction = () => {
  return [
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/question.png',
    },
  ];
};

export default function Index() {
  return (
    <>
      <He4rt />
<<<<<<< HEAD
      <div className='container mx-auto py-40 px-10'>
        <About />
        <FindAtHe4rtSection />
        <Staff />
        <OurPartners />
      </div>
=======
      <About />
      <ForNoobs />
      <FindAtHe4rtSection />
      <Staff />
>>>>>>> 60238feaafbd78cd89bc4a10ea6a5ae5c1fbcb4f
      <Footer />
    </>
  );
}
