import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrow from "src/assets/arrow.svg";
import LinkButton from "../LinkButton";

function SimpleCard({ title, sub, path }: { title: string; sub: string; path: string }) {
  return (
    <div className="w-[375px] text-white sm:w-full">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-3 mb-14">{sub}</p>
      <LinkButton label="了解更多" path={path} />
    </div>
  );
}

export default SimpleCard;
