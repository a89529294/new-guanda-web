import React, { RefObject } from "react";
import Image from "next/image";

import Screen from "./Screen";
import SimpleCard from "./SimpleCard";
import Footer from "../Footer";

import indexLastOne from "src/assets/index-last-1.jpg";
import indexLastTwo from "src/assets/index-last-2.jpg";
import indexLastThree from "src/assets/index-last-3.jpg";
import indexLastFour from "src/assets/index-last-4.jpg";
import QRCodePlate from "../QRCodePlate";

function ScreenFive({ myRef }: { myRef?: RefObject<HTMLDivElement> }) {
  /* pt-[74px] takes nav height into account, pb-[60px] takes footer into account */

  return (
    <Screen
      className="relative isolate grid content-center justify-items-center gap-20 bg-aswad-black pb-[var(--footer-height)] sm:flex sm:flex-col sm:justify-between sm:gap-0 sm:bg-black sm:px-10 sm:pb-9"
      myRef={myRef}>
      <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,300px_0,100%_75%,100%_100%,0_100%)] sm:hidden" />

      <div className="flex items-center gap-72 sm:mt-32 sm:justify-end">
        <QRCodePlate className="translate-y-10 sm:translate-y-0" />
        <SimpleCard
          title="QRcode鐵牌"
          sub="辨識清晰、構件標記更明確，使尋料更快速準確，不浪費您的時間。"
          path="/"
          className="sm:hidden"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto sm:-mr-10 sm:[&>img]:w-[calc(100%_-_40px)] sm:[&>img]:shrink-0">
        <Image src={indexLastOne} alt="" />
        <Image src={indexLastTwo} alt="" />
        <Image src={indexLastThree} alt="" />
        <Image src={indexLastFour} alt="" />
      </div>

      <SimpleCard
        title="QRcode鐵牌"
        sub="辨識清晰、構件標記更明確，使尋料更快速準確，不浪費您的時間。"
        path="/"
        className="hidden sm:block"
      />

      <Footer />
    </Screen>
  );
}

export default ScreenFive;
