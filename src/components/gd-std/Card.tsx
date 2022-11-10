import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrow from "src/assets/arrow.svg";
import cx from "classix";
import UnderscoredText from "../UnderscoredText";
import LinkButton from "../LinkButton";

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
    <div className={cx("grid justify-items-start gap-8 text-white", sizes[size], className)}>
      <UnderscoredText>{title}</UnderscoredText>
      <p className="text-lg">{sub}</p>
      <LinkButton label="立即訂購" path={path} />
    </div>
  );
}

export default Card;
