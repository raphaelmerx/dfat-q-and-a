import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Logo } from "./Logo";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] py-2 px-4 sm:px-8 items-center sm:justify-between justify-center">
      <Logo />
      <div className="flex space-x-4 hidden sm:flex">
        <Link
          className={`flex items-center hover:opacity-50 mr-2 text-sm ${
            typeof window !== 'undefined' && window.location.pathname === '/about' ? 'underline' : ''
          }`}
          href="/about"
        >About</Link>
        <a
          className="flex items-center hover:opacity-50"
          href="https://linkedin.com/company/catalpa-international/"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandLinkedin size={24} />
        </a>
        <a
          className="flex items-center hover:opacity-50"
          href="https://catalpa.io/"
          target="_blank"
          rel="noreferrer"
        >
          <IconExternalLink size={24} />
        </a>
      </div>
    </div>
  );
};
