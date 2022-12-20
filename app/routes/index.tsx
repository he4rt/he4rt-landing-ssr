import type { LinksFunction } from '@remix-run/node';

import About from '~/components/About';
import Footer from '~/components/Footer';
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
      <div className='container mx-auto py-40 px-10'>
        <About />
        <Staff />
      </div>
      <Footer />
    </>
  );
}
