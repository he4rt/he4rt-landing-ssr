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
    href: '#inicio',
    children: 'Início',
  },
  {
    href: '#4noobs',
    children: '4Noobs',
  },
  {
    href: '#sobre',
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
    <footer className='flex items-center justify-center w-full bg-blue-900 dark:bg-gray-100'>
      <div className='flex flex-col my-10 text-gray-300 md:my-16'>
        <ul className='flex justify-between mx-5 text-sm scroll-bottom-1 md:mx-0'>
          {anchorLinks.map(({ children, href }) => (
            <li key={href}>
              <FooterLink href={href}>{children}</FooterLink>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center my-10'>
          {socialMediaLinks.map((link) => (
            <FooterLink key={link.href} {...link} />
          ))}
        </div>
        <div className='mx-10 scroll-bottom-3'>
          <p className='text-sm font-semibold text-center text-gray-300 md:text-base'>
            © {new Date().getFullYear()} He4rt Devs. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
