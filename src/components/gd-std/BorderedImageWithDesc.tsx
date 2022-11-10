import React from "react";
import Image, { StaticImageData } from "next/image";

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
        <Image src={img} alt="" width={235} height={214} className="object-cover" />
      </div>
      <h2 className="w-fit border-l border-b border-light-red pl-2 pt-11 text-2xl font-bold">
        {title}
      </h2>
      <p className="mt-3 ml-2">{desc}</p>
    </div>
  );
}

export default BorderedImageWithDesc;
