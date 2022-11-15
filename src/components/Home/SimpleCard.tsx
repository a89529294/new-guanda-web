import cx from "classix";
import React from "react";

import LinkButton from "../LinkButton";

function SimpleCard({
  title,
  sub,
  path,
  className,
}: {
  title: string;
  sub: string;
  path: string;
  className?: string;
}) {
  return (
    <div className={cx("w-[375px] text-white sm:w-auto", className)}>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-3 mb-14 sm:mb-9">{sub}</p>
      <LinkButton label="了解更多" path={path} />
    </div>
  );
}

export default SimpleCard;
