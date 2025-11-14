import React from "react";
import Image, { StaticImageData } from "next/image";
import { RedirectIco } from "@/assets/svgs/export";

interface ProjectCardProps {
  imageSrc: StaticImageData | string;
  altText: string;
  title: string;
  description: string;
  projectLink: string;
}

export function ProjectCard({
  imageSrc,
  altText,
  title,
  description,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col py-[30px] px-5 items-start gap-[26px] lg:w-[48.89%] w-full">
      <Image
        src={imageSrc}
        alt={altText}
        className="w-full self-stretch bg-lightgray bg-center bg-contain bg-no-repeat h-[230px] object-cover object-center"
      />
      <div className="flex flex-col items-start w-full gap-[15px] self-stretch">
        <h5 className="text-2xl font-normal">{title}</h5>
        <p className="text-gray-custom text-base font-normal">{description}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex py-3 px-5 items-center gap-[15px] rounded-[35px] border border-gray-custom text-base font-normal text-gray-custom"
        >
          <RedirectIco />
          View Project
        </a>
      </div>
    </div>
  );
}
