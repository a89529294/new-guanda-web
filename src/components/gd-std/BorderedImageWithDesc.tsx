import React from "react";
import Image, { StaticImageData } from "next/image";
import UnderscoredText from "../UnderscoredText";

function BorderedImageWithDesc({
  img,
  title,
  desc,
  className,
}: {
  img: StaticImageData;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="w-fit border border-light-red px-1.5 py-1">
        <Image src={img} alt="" width={235} height={214} className="w-48 object-cover" />
      </div>
      <h2 className="w-fit border-l border-b border-light-red pl-2 pt-11 text-2xl font-bold sm:hidden">
        {title}
      </h2>
      <UnderscoredText className="mt-6 hidden w-fit sm:block">{title}</UnderscoredText>
      <p className="mt-3 ml-2 text-lg sm:ml-0">{desc}</p>
    </div>
  );
}

export default BorderedImageWithDesc;
