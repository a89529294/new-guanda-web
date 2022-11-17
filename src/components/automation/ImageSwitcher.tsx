import cx from "classix";
import React, { useState } from "react";
import Image from "next/image";

import switch1 from "src/assets/automation/switch1-new.webp";
import switch2 from "src/assets/automation/switch2-new.webp";
import switch3 from "src/assets/automation/switch3-new.webp";
import switch4 from "src/assets/automation/switch4-new.webp";

function ImageSwitcher() {
  const [selectedIdx, selectIdx] = useState(0);

  return (
    <div className="relative z-50 flex h-screen-minus-nav-footer flex-col sm:h-auto ">
      <nav className="text-white ">
        <ul className="no-scrollbar flex bg-aswad-black sm:overflow-x-scroll">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className={cx(
                "sm:px-4.5 flex-1 cursor-pointer py-5 text-center sm:flex-initial sm:shrink-0 sm:py-4 sm:text-xs",
                i === selectedIdx && "border-b-[3px] border-light-red bg-white/20"
              )}
              onClick={() => selectIdx(i)}>
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-1 justify-center bg-cerebral-gray">
        <div className="relative h-full bg-white">
          <Image src={images[selectedIdx]} alt="" className="h-full w-auto" />
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl font-bold">
            {captions[selectedIdx]}
          </span>
        </div>
      </div>
    </div>
  );
}

const tabs = ["產線圖 - Ｉ型", "產線圖 - Ｕ型", "產線圖 - Ｙ型", "產線圖 - Ｚ型"];
const captions = ["Ｉ型自動化產線", "Ｕ型自動化產線", "Ｙ型自動化產線", "Ｚ型自動化產線"];
const images = [switch1, switch2, switch3, switch4];

export default ImageSwitcher;
