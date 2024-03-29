import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useMedia } from 'react-use';

import ToggleTheme from './ToggleTheme';

type AnchorLinkProps = {
  to: string;
  children: string;
};

const links: AnchorLinkProps[] = [
  {
    children: 'Início',
    to: '#init',
  },
  {
    children: 'Sobre nós',
    to: '#about',
  },
  {
    children: '4noobs',
    to: '#4noobs',
  },
  {
    children: 'Staff',
    to: '#staff',
  },
  {
    children: 'Recordes',
    to: '#records',
  },
  {
    children: 'Parceiros',
    to: '#partners',
  },
];

const AnchorLink = ({ to, children }: AnchorLinkProps) => (
  <a
    href={to}
    className='font-dm text-base font-bold text-white transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:underline hover:underline-offset-8'
  >
    {children}
  </a>
);

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
  }, [open]);

  if (!open) {
    return (
      <AiOutlineMenu
        size={25}
        className='absolute z-10 m-5 cursor-pointer text-purple-700'
        onClick={toggleMenu}
      />
    );
  }

  return (
    <div className='h-full w-full bg-purple-700 p-5'>
      <div className='flex justify-between'>
        <AiOutlineClose
          className='mb-6 cursor-pointer text-white'
          size={25}
          onClick={toggleMenu}
        />
        <ToggleTheme />
      </div>

      <div className='flex h-full flex-col justify-around'>
        <div className='flex flex-col gap-5'>
          {links.map((props) => (
            <AnchorLink key={`key-link-${props.to}`} {...props} />
          ))}
        </div>

        <div className='flex flex-col gap-4'>
          <p className='font-dm text-xl font-bold text-white'>
            Conheça a He4rt Devs
          </p>
          <p className='font-dm text-base font-normal text-white'>
            Faça parte do nosso Discord e venha aprender com diversos projetos e
            cursos feitos pela comunidade.
          </p>
          <a
            href='https://discord.com/invite/5kwDQuv'
            rel='noopener noreferrer'
            target='_blank'
            className='rounded-lg bg-white px-4 py-2 text-base font-bold text-purple-500'
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const isWide = useMedia('(min-width: 960px)');

  if (!isWide) {
    return <MobileNavbar />;
  }

  return (
    <nav className='flex w-full justify-between gap-5 bg-navbar py-6 px-28'>
      <div className='flex gap-5'>
        {links.map((props) => (
          <AnchorLink key={`key-link-${props.to}`} {...props} />
        ))}
      </div>

      <ToggleTheme />
    </nav>
  );
}
