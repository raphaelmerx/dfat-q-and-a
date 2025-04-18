import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../public/logo.png";

export const Logo: FC = () => {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="Logo"
        width={50}
        height={50}
      />
      <div className="font-semibold text-2xl">
        <Link href="/">SavehAI</Link>
      </div>
    </div>
  );
};
