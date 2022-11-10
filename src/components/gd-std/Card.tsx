import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrow from "src/assets/arrow.svg";
import cx from "classix";
import UnderscoredText from "../UnderscoredText";

function Card({
  title,
  sub,
  path,
  size,
  className,
}: {
  title: string;
  sub: string;
  path: string;
  size: "fluid" | "fixed";
  className?: string;
}) {
  const sizes = {
    fluid: "w-full",
    fixed: "w-[695px]",
  };

  return (
    <div className={cx("grid gap-8 text-white", sizes[size], className)}>
      <UnderscoredText>{title}</UnderscoredText>
      <p className="text-lg">{sub}</p>
      <Link
        href={path}
        className=" flex w-fit items-center gap-2.5 border border-white/[0.35] bg-[rgba(67,66,66,0.7)] py-2.5 px-5">
        <span>立即訂購</span>
        <Image src={arrow} alt="arrow" />
      </Link>
    </div>
  );
}

export default Card;
