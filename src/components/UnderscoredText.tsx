import cx from "classix";
import React, { ReactNode } from "react";

function UnderscoredText({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm";
}) {
  const sizes = {
    default: "text-2xl",
    sm: "text-xl",
  };
  return (
    <h2
      className={cx(
        "before-red-circle after-red-circle relative whitespace-nowrap border-b border-light-red pb-2  font-bold",
        sizes[size],
        className
      )}>
      {children}
    </h2>
  );
}

export default UnderscoredText;
