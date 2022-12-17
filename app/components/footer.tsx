import clsx from "clsx";
import { GenIcon } from "react-icons";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import type { ComponentProps } from "react";

type LinkProps = Pick<
  ComponentProps<"a">,
  "children" | "href" | "target" | "aria-label"
> & {
  isIcon?: boolean;
};

const anchorLinks: Omit<LinkProps, "isIcon">[] = [
  {
    href: "#inicio",
    children: "Início",
  },
  {
    href: "#4noobs",
    children: "4Noobs",
  },
  {
    href: "#sobre",
    children: "Sobre",
  },
];

const socialMediaLinks: LinkProps[] = [
  {
    href: "https://www.instagram.com/heartdevs",
    children: (
      <AiOutlineInstagram
        size={24}
        className="hover:-translate-y-0.5 transform-gpu transition-all hover:fill-purple-500 footer__icons"
      />
    ),
    target: "_blank",
    isIcon: true,
    "aria-label": "Instagram da He4rtDevs",
  },
  {
    href: "https://twitter.com/He4rtDevs",
    children: (
      <AiOutlineTwitter
        size={24}
        className="hover:-translate-y-0.5 transform-gpu transition-all hover:fill-purple-500 footer__icons"
      />
    ),
    target: "_blank",
    isIcon: true,
    "aria-label": "Twitter da He4rtDevs",
  },
  {
    href: "https://discord.com/invite/5kwDQuv",
    children: (
      <FaDiscord
        size={24}
        className="hover:-translate-y-0.5 transform-gpu transition-all hover:fill-purple-500 footer__icons"
      />
    ),
    target: "_blank",
    isIcon: true,
    "aria-label": "Discord da He4rtDevs",
  },
  {
    href: "https://github.com/he4rt",
    children: (
      <AiOutlineGithub
        size={24}
        className="hover:-translate-y-0.5 transform-gpu transition-all hover:fill-purple-500 footer__icons"
      />
    ),
    target: "_blank",
    isIcon: true,
    "aria-label": "Github da He4rtDevs",
  },
];

const FooterLink = ({
  children,
  target = "_self",
  isIcon,
  ...props
}: LinkProps) => {
  const iconClass = "scroll-bottom-2 mx-5";
  const textClass = "font-semibold hover:text-purple-500 md:text-base";

  return (
    <a
      target={target}
      rel="noopener noreferrer"
      className={clsx(!isIcon ? textClass : iconClass)}
      {...props}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="w-full bg-blue-900 dark:bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col text-gray-300 my-10 md:my-16">
        <ul className="flex scroll-bottom-1 justify-between font-sans text-sm mx-5 md:mx-0">
          {anchorLinks.map(({ children, href }) => (
            <li key={href}>
              <FooterLink href={href}>{children}</FooterLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center my-10">
          {socialMediaLinks.map((link) => (
            <FooterLink key={link.href} {...link} />
          ))}
        </div>
        <div className="mx-10 scroll-bottom-3">
          <p className="font-semibold text-center text-gray-300 text-sm md:text-base">
            © 2022 He4rt Devs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
