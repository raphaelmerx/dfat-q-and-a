import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import { Logo } from "./Logo";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] py-2 px-4 sm:px-8 items-center sm:justify-between justify-center">
      <Logo />
      <div className="flex space-x-4 hidden sm:flex">
        <a
          className="flex items-center hover:opacity-50"
          href="https://github.com/raphaelmerx"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub size={24} />
        </a>
        <a
          className="flex items-center hover:opacity-50"
          href="https://www.linkedin.com/in/raphaelmerx/"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandLinkedin size={24} />
        </a>
        <a
          className="flex items-center hover:opacity-50"
          href="https://www.rapha.dev/blog/dfat-qa"
          target="_blank"
          rel="noreferrer"
        >
          <IconExternalLink size={24} />
        </a>
      </div>
    </div>
  );
};
