import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import clsx from 'clsx';

import type { Theme } from '~/utils/theme-provider';
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from '~/utils/theme-provider';
import { getThemeSession } from './utils/theme.server';

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

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();

  return (
    <html lang='pt-BR' className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
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
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
