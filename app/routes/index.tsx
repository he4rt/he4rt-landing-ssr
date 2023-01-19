import type { LinksFunction } from '@remix-run/node';

import About from '~/components/About';
import FindAtHe4rtSection from '~/components/FindAtHe4rtSection';
import He4rt from '~/components/He4rt';
import OurPartners from '~/components/OurPartners';
import SectionRecords from '~/components/SectionRecords';
import Staff from '~/components/Staff';
import ForNoobs from '~/components/ForNoobs';
import ContactBanner from '~/components/ContactBanner';

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
      <About />
      <ForNoobs />
      <FindAtHe4rtSection />
      <Staff />
      <SectionRecords />
      <ContactBanner />
      <OurPartners />
    </>
  );
}
