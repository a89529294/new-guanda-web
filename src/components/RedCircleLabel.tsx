import cx from "classix";
import React from "react";

function RedCircleLabel({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cx(
        "grid h-8 w-8 place-items-center rounded-full bg-logo-red text-xl text-white",
        className
      )}>
      {children}
    </span>
  );
}

export default RedCircleLabel;
