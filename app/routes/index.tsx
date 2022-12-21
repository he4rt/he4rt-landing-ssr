import type { LinksFunction } from '@remix-run/node';
import Footer from '~/components/Footer';
import He4rt from '~/components/He4rt';
import UserCard from '~/components/UserCard';

import { users } from '~/mocks/users';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/daniel.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/gustavo.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/pride.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/julia.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/7k.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/novout.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/m7.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/nadachi.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/nextur.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/grande.png',
    },
    {
      rel: 'prefetch',
      as: 'image',
      href: '/images/staff/yaya.png',
    },
  ];
};

export default function Index() {
  return (
    <>
      <He4rt />
      <div className='container mx-auto py-40'>
        <h3 className='font-sans font-bold text-4xl text-gray-700 text-center mb-2'>
          Venha conhecer a equipe da{' '}
          <span className='text-purple-500'>He4rt Devs.</span>
        </h3>
        <p className='font-sans text-xl	font-normal text-gray-750 text-center mb-12 max-w-4xl mx-auto'>
          Nós temos os recursos para levar qualquer ideia para frente, nenhum
          sonho é louco demais para nós. Descubra como desenvolver projetos que
          revolucionam a maneira de aprender.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-8 gap-x-11'>
          {users.map((user) => (
            <UserCard key={`user-key-${user.username}`} {...user} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
