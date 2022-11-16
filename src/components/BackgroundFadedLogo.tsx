import React from "react";
import Image from "next/image";

import logoOnly from "src/assets/logo-only.svg";
import cx from "classix";

function BackgroundFadedLogo({ className }: { className: string }) {
  return (
    <Image
      src={logoOnly}
      alt="decoration"
      className={cx("absolute w-[702px] opacity-15 sm:w-72", className)}
    />
  );
}

export default BackgroundFadedLogo;
