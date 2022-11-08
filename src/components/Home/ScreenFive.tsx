import React from "react";
import Image from "next/image";

import Screen from "./Screen";
import SimpleCard from "./SimpleCard";
import Footer from "../Footer";

import gdPlate from "src/assets/gd-plate.jpg";
import indexLastOne from "src/assets/index-last-1.jpg";
import indexLastTwo from "src/assets/index-last-2.jpg";
import indexLastThree from "src/assets/index-last-3.jpg";
import indexLastFour from "src/assets/index-last-4.jpg";

function ScreenFive() {
  /* pt-[74px] takes nav height into account, pb-[60px] takes footer into account */

  return (
    <Screen className="relative isolate grid content-center justify-items-center gap-20 bg-aswad-black pt-[74px] pb-[60px]">
      <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,300px_0,100%_75%,100%_100%,0_100%)]" />
      <div className="flex items-center gap-72 ">
        <div className="relative translate-y-10">
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
          <Image src={gdPlate} alt="gd-place" width={345} />
          <div className="absolute bottom-0 -left-2 h-[38%] w-6 -translate-y-[35%] -translate-x-full border border-r-0">
            <div className="absolute bottom-[30%] h-[70%] w-7 -translate-x-full border-b after:absolute after:right-[1px] after:block after:h-full after:border-r-[3px] after:border-light-red">
              <span className="absolute bottom-0 -left-2 -translate-x-full whitespace-nowrap leading-none text-white">
                車次符號
              </span>
            </div>
          </div>
        </div>
        <SimpleCard
          title="QRcode鐵牌"
          sub="辨識清晰、構件標記更明確，使尋料更快速準確，不浪費您的時間。"
          path="/"
        />
      </div>

      <div className="flex gap-3">
        <Image src={indexLastOne} alt="" className="" />
        <Image src={indexLastTwo} alt="" />
        <Image src={indexLastThree} alt="" />
        <Image src={indexLastFour} alt="" />
      </div>
      <Footer />
    </Screen>
  );
}

export default ScreenFive;
