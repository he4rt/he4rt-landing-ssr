import clsx from 'clsx';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import type { ComponentProps } from 'react';

type LinkProps = Pick<
  ComponentProps<'a'>,
  'children' | 'href' | 'target' | 'aria-label'
> & {
  isIcon?: boolean;
};

const anchorLinks: Omit<LinkProps, 'isIcon'>[] = [
  {
    href: '#init',
    children: 'Início',
  },
  {
    href: '#4noobs',
    children: '4Noobs',
  },
  {
    href: '#about',
    children: 'Sobre',
  },
];

const socialMediaLinks: LinkProps[] = [
  {
    href: 'https://www.instagram.com/heartdevs',
    children: (
      <AiOutlineInstagram
        size={24}
        className='footer__icons transform-gpu transition-all hover:-translate-y-0.5 hover:fill-purple-500'
      />
    ),
    target: '_blank',
    isIcon: true,
    'aria-label': 'Instagram da He4rtDevs',
  },
  {
    href: 'https://twitter.com/He4rtDevs',
    children: (
      <AiOutlineTwitter
        size={24}
        className='footer__icons transform-gpu transition-all hover:-translate-y-0.5 hover:fill-purple-500'
      />
    ),
    target: '_blank',
    isIcon: true,
    'aria-label': 'Twitter da He4rtDevs',
  },
  {
    href: 'https://discord.com/invite/5kwDQuv',
    children: (
      <FaDiscord
        size={24}
        className='footer__icons transform-gpu transition-all hover:-translate-y-0.5 hover:fill-purple-500'
      />
    ),
    target: '_blank',
    isIcon: true,
    'aria-label': 'Discord da He4rtDevs',
  },
  {
    href: 'https://github.com/he4rt',
    children: (
      <AiOutlineGithub
        size={24}
        className='footer__icons transform-gpu transition-all hover:-translate-y-0.5 hover:fill-purple-500'
      />
    ),
    target: '_blank',
    isIcon: true,
    'aria-label': 'Github da He4rtDevs',
  },
];

const FooterLink = ({
  children,
  target = '_self',
  isIcon,
  ...props
}: LinkProps) => {
  const iconClass = 'scroll-bottom-2 mx-5';
  const textClass = 'font-semibold hover:text-purple-500 md:text-base';

  return (
    <a
      target={target}
      rel='noopener noreferrer'
      className={clsx(!isIcon ? textClass : iconClass)}
      {...props}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className='flex w-full items-center justify-center bg-blue-900 dark:bg-gray-100'>
      <div className='my-10 flex flex-col text-gray-300 md:my-16'>
        <ul className='scroll-bottom-1 mx-5 flex justify-between text-sm md:mx-0'>
          {anchorLinks.map(({ children, href }) => (
            <li key={href}>
              <FooterLink href={href}>{children}</FooterLink>
            </li>
          ))}
        </ul>
        <div className='my-10 flex items-center justify-center'>
          {socialMediaLinks.map((link) => (
            <FooterLink key={link.href} {...link} />
          ))}
        </div>
        <div className='scroll-bottom-3 mx-10'>
          <p className='text-center text-sm font-semibold text-gray-300 md:text-base'>
            © {new Date().getFullYear()} He4rt Devs. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
