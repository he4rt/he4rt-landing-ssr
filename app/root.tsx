import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/tailwind.css";

import favicon from "../public/favicon.svg";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "He4rt Developers",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700&family=Spline+Sans:wght@400;500;700&display=swap",
    crossOrigin: "anonymous",
  },
  {
    rel: "icon",
    href: favicon,
    type: "image/svg",
  },
];

export default function App() {
  return (
    <html lang="pt-BR">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen dark:bg-gray-999 font-spline">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
