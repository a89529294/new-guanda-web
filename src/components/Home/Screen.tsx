import React, { ReactNode, RefObject, useEffect, useRef } from "react";
import cx from "classix";

function Screen({
  children,
  className,
  myRef,
}: {
  children: ReactNode;
  className?: string;
  myRef?: RefObject<HTMLDivElement>;
}) {
  return (
    <div className={cx("h-screen-minus-nav snap-start ", className)} ref={myRef}>
      {children}
    </div>
  );
}

export default Screen;
