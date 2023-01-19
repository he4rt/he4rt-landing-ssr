import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import styles from '~/tailwind.css';
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'He4rt Developers',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Spline+Sans:wght@300;400;500;600;700&display=swap',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'icon',
    href: '/brands/heart.svg',
    type: 'image/svg',
  },
];

export default function App() {
  return (
    <html lang='pt-BR'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-screen overflow-x-hidden'>
      <Navbar/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      <Footer />
      </body>
    </html>
  );
}
