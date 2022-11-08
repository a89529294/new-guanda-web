import React, { ReactNode } from "react";
import cx from "classix";

function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("h-screen snap-start", className)}>{children}</div>;
}

export default Screen;
