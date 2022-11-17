import React, { RefObject } from "react";
import Image from "next/image";

import Screen from "./Screen";
import SimpleCard from "./SimpleCard";
import GreenCircle from "../GreenCircle";

import circleApp from "src/assets/circle-app.svg";
import circleGdErp from "src/assets/circle-gd-erp.svg";
import circleQr from "src/assets/circle-qr.svg";
import erp from "src/assets/index-erp.jpg";

function ScreenFour({ myRef }: { myRef?: RefObject<HTMLDivElement> }) {
  return (
    <Screen
      className="relative isolate grid place-content-center gap-14 bg-aswad-black sm:flex sm:flex-col sm:justify-between sm:gap-0 sm:bg-black sm:px-10 sm:pb-8"
      myRef={myRef}>
      <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,300px_0,100%_75%,100%_100%,0_100%)] sm:hidden" />
      {/* erp image plus card container */}
      <div className="flex gap-14 sm:-mx-10">
        <Image src={erp} alt="erp" className="w-[740px] " />
        <SimpleCard
          title="ERP軟體"
          sub="清晰的專案管理，搭配手機掃描軟體，輕鬆掌握各人員進度。"
          path="/"
          className="sm:hidden"
        />
      </div>

      {/* desktop three green circles */}
      <div className="flex items-center gap-10 justify-self-center sm:hidden">
        <GreenCircle image={circleApp} label="手機App" />
        <TripleDots />
        <GreenCircle image={circleGdErp} label="GD-ERP" />
        <TripleDots />
        <GreenCircle image={circleQr} label="QR鐵牌" />
      </div>

      {/* mobile three green circles */}
      <div className="hidden items-center justify-self-center sm:grid">
        <GreenCircle image={circleApp} />
        <div className="flex justify-between">
          <GreenCircle image={circleGdErp} />
          <GreenCircle image={circleQr} />
        </div>
      </div>

      <SimpleCard
        title="ERP軟體"
        sub="清晰的專案管理，搭配手機掃描軟體，輕鬆掌握各人員進度。"
        path="/"
        className="hidden sm:block"
      />
    </Screen>
  );
}

function TripleDots() {
  return (
    // -translate-y-[19px] takes into account of (gap between circle and label plus label height)/2
    <div className="flex -translate-y-[19px] gap-4 ">
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
    </div>
  );
}

export default ScreenFour;
