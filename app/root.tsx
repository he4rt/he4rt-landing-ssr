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

const metaDescription =
  'Uma comunidade de desenvolvedores ajudando os iniciantes do mundo da programação. A He4rt Developers já está formando várias mentes brilhantes que saíram do zero e passaram para o intermediário/avançado.';
const metaCreator = "@He4rtDevs"
const title = "He4rt Developers"
const urlImage = "/images/banner-meta.png"
const imageAlt = "Logo em formato de coração roxo representando a He4rt Developers"

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: title,
  description: metaDescription,
  'twitter:card': 'summary_large_image',
  'twitter:site': metaCreator,
  'twitter:creator': metaCreator,
  'twitter:title': title,
  'twitter:description': metaDescription,
  'twitter:image': urlImage,
  'twitter:image:alt': imageAlt,

  'og:title': title,
  'og:description': metaDescription,
  'og:image': urlImage,
  'og:image:alt': imageAlt,
  'og:url': 'https://heartdevs.com',
  'og:site_name': title,

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
