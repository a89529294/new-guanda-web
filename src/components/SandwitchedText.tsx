import cx from "classix";
import React from "react";

function SandwitchedText({
  children,
  fontSize = "md",
}: {
  children: string;
  fontSize?: "lg" | "md";
}) {
  const fontSizes = {
    lg: "text-[41px]",
    md: "text-2xl",
  };
  return (
    <div className="mx-auto mb-3 w-fit">
      <div className="before-red-circle after-red-circle relative" />
      <h2
        className={cx(
          "border-t border-b border-light-red pb-1 pt-0.5 font-bold leading-tight text-white",
          fontSizes[fontSize]
        )}>
        {children}
      </h2>
      <div className="before-red-circle after-red-circle relative -translate-y-[1px]" />
    </div>
  );
}

export default SandwitchedText;
