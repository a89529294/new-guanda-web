import React from "react";
import Image from "next/image";

import gdPlate from "src/assets/gd-plate.jpg";
import cx from "classix";

function QRCodePlate({ size = "md", className }: { size?: "lg" | "md"; className?: string }) {
  const sizes = {
    lg: "w-[600px]",
    md: "w-80 sm:w-64",
  };
  return (
    <div className={cx("relative", className)}>
      <div className="absolute left-[15%] -top-2 h-5 w-1/2 -translate-y-full border border-b-0 ">
        <div className="absolute left-[30%] h-10 w-[70%] -translate-y-full border-l after:absolute after:bottom-[1px] after:block after:w-full after:border-b-[3px] after:border-light-red">
          <span className="absolute -top-2 -translate-y-full whitespace-nowrap text-white">
            構件編號
          </span>
        </div>
      </div>
      <div className="absolute right-[4%] -top-2 h-5 w-1/4 -translate-y-full border border-b-0 ">
        <div className="absolute left-[30%] h-5 w-[70%] -translate-y-full border-l after:absolute after:bottom-[1px] after:block after:w-full after:border-b-[3px] after:border-light-red">
          <span className="absolute -top-2 -translate-y-full whitespace-nowrap text-white">
            實體二維碼
          </span>
        </div>
      </div>
      <Image src={gdPlate} alt="gd-place" className={sizes[size]} priority />
      <div className="absolute bottom-0 -left-2 h-[38%] w-6 -translate-y-[35%] -translate-x-full border border-r-0">
        <div className="absolute bottom-[30%] h-[70%] w-7 -translate-x-full border-b after:absolute after:right-[1px] after:block after:h-full after:border-r-[3px] after:border-light-red">
          <span className="absolute bottom-0 -left-2 -translate-x-full whitespace-nowrap leading-none text-white sm:w-1 sm:-translate-y-2 sm:whitespace-normal">
            車次符號
          </span>
        </div>
      </div>
    </div>
  );
}

export default QRCodePlate;
