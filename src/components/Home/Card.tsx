import Link from "next/link";
import React from "react";
import Image from "next/image";

import arrow from "src/assets/arrow.svg";
import LinkButton from "../LinkButton";

function Card({ title, sub, path }: { title: string; sub: string; path: string }) {
  return (
    <div className="absolute right-0 bottom-11 w-[470px] border-l-[3px] border-light-red bg-black/60 py-6 pl-8 text-white sm:inset-x-0 sm:bottom-0 sm:w-auto sm:border-none sm:pl-10 sm:pr-24 sm:pt-6 sm:pb-8">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-3 mb-14 sm:mb-9">{sub}</p>
      <LinkButton label="了解更多" path={path} />
    </div>
  );
}

export default Card;
