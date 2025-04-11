import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconExternalLink } from "@tabler/icons-react";
import { FC } from "react";
import Image from "next/image";
import catalpa_logo from "../public/catalpa_logo.png";

export const Footer: FC = () => {
  // flex div, with items centered, one on top of the other
  // - the catalpa_logo.png at the top
  // - the text "Sahveh.ai is a tool designed to support development insights and decision-making. While every effort is made to ensure accuracy, outputs are generated using AI and should be interpreted alongside expert judgement and contextual knowledge." at the bottom
  return (
    <div className="flex flex-col items-center justify-center text-center my-10">
      <div className="flex items-center">
        <Image
          src={catalpa_logo}
          alt="Catalpa Logo"
          width={100}
          className="mr-2"
          />
      </div>
      <div className="text-xs font-normal mt-2 max-w-[500px] text-gray-500 mb-5">
        Saveh.ai is a tool designed to support development insights and decision-making. While every effort is made to ensure accuracy, outputs are generated using AI and should be interpreted alongside expert judgement and contextual knowledge.
      </div>
    </div>
  );
};
