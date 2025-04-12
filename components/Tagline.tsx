import { IconBrandGithub, IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";

export const TagLine: FC = () => {
  // text "Know More, Do Better", centered, bold, font size 2xl
  // put it on 2 lines ("Know More" on the first line, "Do Better" on the second line)
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <div className="text-5xl font-bold">
        Know More,
      </div>
      <div className="text-5xl font-bold">
        Do Better
      </div>
      <div className="text-lg font-normal mt-2 max-w-[430px] text-gray-500">
        Enhance development effectiveness with AI-driven insights from Australian aid programs.
      </div>
    </div>
  );
};
