import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import logo from "../public/logo.png";

export const Logo: FC = () => {
  // a flex div, aligned horizontally, with 
  // - the logo.png to the left
  // - the text Saveh.ai in bold to the right
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="Logo"
        width={50}
        height={50}
      />
      <div className="font-semibold text-2xl">
        <a href="/">Saveh.ai</a>
      </div>
    </div>
  );
};
