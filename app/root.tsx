import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import clsx from 'clsx';

import { ThemeProvider, useTheme } from '~/providers/theme-provider';

import styles from '~/tailwind.css';
import mainStyles from '../styles/styles.css';

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
    href: '/images/brands/heart.svg',
    type: 'image/svg',
  },
  {
    rel: 'stylesheet',
    href: mainStyles,
  },
];

function App() {
  const [theme] = useTheme();

  return (
    <html lang='pt-BR' className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-screen overflow-x-hidden'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
