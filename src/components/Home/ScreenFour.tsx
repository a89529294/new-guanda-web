import React, { RefObject } from "react";
import Image from "next/image";

import Screen from "./Screen";
import SimpleCard from "./SimpleCard";

import circleApp from "src/assets/circle-app.svg";
import circleGdErp from "src/assets/circle-gd-erp.svg";
import circleQr from "src/assets/circle-qr.svg";
import erp from "src/assets/index-erp-hd.png";

function ScreenFour({ myRef }: { myRef?: RefObject<HTMLDivElement> }) {
  /* pt-[74px] takes nav height into account */

  return (
    <Screen
      className="relative isolate grid place-content-center gap-14 bg-aswad-black pt-[74px] sm:flex sm:flex-col "
      myRef={myRef}>
      <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,300px_0,100%_75%,100%_100%,0_100%)] sm:[clip-path:none]" />
      {/* erp image plus card container */}
      <div className="flex gap-14 sm:flex-col">
        <Image src={erp} alt="erp" className="w-[740px] sm:w-full" />
        <SimpleCard
          title="ERP軟體"
          sub="清晰的專案管理，搭配手機掃描軟體，輕鬆掌握各人員進度。"
          path="/"
        />
      </div>
      {/* three red circles */}
      <div className="flex items-center gap-10 justify-self-center">
        <RedCircle image={circleApp} label="手機App" />
        <TripleDots />
        <RedCircle image={circleGdErp} label="GD-ERP" />
        <TripleDots />
        <RedCircle image={circleQr} label="QR鐵牌" />
      </div>
    </Screen>
  );
}

function RedCircle({ image, label }: { image: any; label: string }) {
  return (
    <div className="grid justify-items-center gap-2.5">
      <Image src={image} alt="app" />
      <h2 className="text-xl text-white">{label}</h2>
    </div>
  );
}

function TripleDots() {
  return (
    // -translate-y-[19px] takes into account of (gap between circle and label plus label height)/2
    <div className="flex -translate-y-[19px] gap-4 sm:hidden">
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
    </div>
  );
}

export default ScreenFour;
