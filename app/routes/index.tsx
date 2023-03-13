import type { LinksFunction } from '@remix-run/node';

import About from '~/components/About';
import FindAtHe4rtSection from '~/components/FindAtHe4rtSection';
import Footer from '~/components/Footer';
import He4rt from '~/components/He4rt';
import OurPartners from '~/components/OurPartners';
import SectionRecords from '~/components/SectionRecords';
import Staff from '~/components/Staff';
import ForNoobs from '~/components/ForNoobs';
import ContactBanner from '~/components/ContactBanner';
import Navbar from '~/components/Navbar';

import { fetchContributors } from '~/services/fetchContributors';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const contributors = await fetchContributors();

  return contributors ?? [];
};

type LoaderType = typeof loader;

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
  const contributorsData = useLoaderData<LoaderType>();

  return (
    <>
      <Navbar />
      <He4rt contributors={contributorsData} />
      <About />
      <ForNoobs />
      <FindAtHe4rtSection />
      <Staff />
      <SectionRecords />
      <ContactBanner />
      <OurPartners />
      <Footer />
    </>
  );
}
