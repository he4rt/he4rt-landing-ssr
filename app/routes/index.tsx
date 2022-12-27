import type { LinksFunction } from '@remix-run/node';

import About from '~/components/About';
import FindAtHe4rtSection from '~/components/FindAtHe4rtSection';
import Footer from '~/components/Footer';
import He4rt from '~/components/He4rt';
import Staff from '~/components/Staff';

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
      <div className='container mx-auto py-40 px-10'>
        <About />
        <FindAtHe4rtSection />
        <Staff />
      </div>
      <Footer />
    </>
  );
}
