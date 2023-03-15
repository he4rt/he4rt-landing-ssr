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
    className='text-base font-bold text-white transition duration-300 ease-in-out delay-150 font-dm hover:-translate-y-1 hover:scale-110 hover:underline hover:underline-offset-8'
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
        className='absolute z-10 m-5 text-purple-700 cursor-pointer'
        onClick={toggleMenu}
      />
    );
  }

  return (
    <div className='w-full h-full p-5 bg-purple-700'>
      <div className='flex justify-between'>
        <AiOutlineClose
          className='mb-6 text-white cursor-pointer'
          size={25}
          onClick={toggleMenu}
        />
        <ToggleTheme />
      </div>

      <div className='flex flex-col justify-around h-full'>
        <div className='flex flex-col gap-5'>
          {links.map((props) => (
            <AnchorLink key={`key-link-${props.to}`} {...props} />
          ))}
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-xl font-bold text-white font-dm'>
            Conheça a He4rt Devs
          </p>
          <p className='text-base font-normal text-white font-dm'>
            Faça parte do nosso Discord e venha aprender com diversos projetos e
            cursos feitos pela comunidade.
          </p>
          {/* TODO adicionar link do discord */}
          <a
            href='/'
            target='_blank'
            className='px-4 py-2 text-base font-bold text-purple-500 bg-white rounded-lg'
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
    <nav className='flex justify-between w-full gap-5 py-6 bg-navbar px-28'>
      <div className='flex gap-5'>
        {links.map((props) => (
          <AnchorLink key={`key-link-${props.to}`} {...props} />
        ))}
      </div>

      <ToggleTheme />
    </nav>
  );
}
