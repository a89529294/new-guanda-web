import cx from "classix";
import React from "react";

function BackgroundTriangles({ className }: { className?: string }) {
  return (
    <div
      className={cx(
        "absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,35%_0,100%_360px,100%_100%,calc(100%-400px)_100%,0_calc(100%-400px))]",
        className
      )}
    />
  );
}

export default BackgroundTriangles;
