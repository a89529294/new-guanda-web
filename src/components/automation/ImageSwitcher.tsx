import cx from "classix";
import React, { useState } from "react";
import Image from "next/image";

import switch1 from "src/assets/automation/switch1.webp";
import switch2 from "src/assets/automation/switch2.webp";
import switch3 from "src/assets/automation/switch3.webp";
import switch4 from "src/assets/automation/switch4.webp";

function ImageSwitcher() {
  const [selectedIdx, selectIdx] = useState(0);

  return (
    // 134 is the height of the nav + footer
    <div className="flex h-[calc(100vh-134px)] flex-col ">
      <nav className="text-white ">
        <ul className="flex">
          {tabs.map((tab, i) => (
            <li
              key={i}
              className={cx(
                "flex-1 cursor-pointer py-5 text-center",
                i === selectedIdx ? "border-b-[3px] border-light-red bg-white/20" : "bg-aswad-black"
              )}
              onClick={() => selectIdx(i)}>
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-1 justify-center bg-cerebral-gray">
        <div className="h-full bg-white">
          <Image src={images[selectedIdx]} alt="" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
}

const tabs = ["產線圖 - Ｉ型", "產線圖 - Ｕ型", "產線圖 - Ｙ型", "產線圖 - Ｚ型"];
const images = [switch1, switch2, switch3, switch4];

export default ImageSwitcher;
