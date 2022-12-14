import Link from "next/link";
import React from "react";
import Image from "next/image";

import arrow from "src/assets/arrow.svg";

function LinkButton({ label, path }: { label: string; path: string }) {
  return (
    <Link
      href={path}
      className=" flex w-fit items-center gap-2.5 border border-white/[0.35] bg-button py-2.5 px-5 hover:bg-button-hover">
      <span>{label}</span>
      <Image src={arrow} alt="arrow" />
    </Link>
  );
}

export default LinkButton;
