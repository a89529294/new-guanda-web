import Link from "next/link";
import React from "react";
import Image from "next/image";

import arrow from "src/assets/arrow.svg";

function Card({ title, sub, path }: { title: string; sub: string; path: string }) {
  return (
    <div className="absolute right-0 bottom-11 w-[470px] border-l-[3px] border-light-red bg-black/60 py-6 pl-8 text-white sm:w-80 sm:pr-8">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-3 mb-14">{sub}</p>
      <Link
        href={path}
        className="flex w-fit items-center gap-2.5 border border-white/[0.35] bg-[rgba(67,66,66,0.7)] py-2.5 px-5">
        <span>了解更多</span>
        <Image src={arrow} alt="arrow" />
      </Link>
    </div>
  );
}

export default Card;
