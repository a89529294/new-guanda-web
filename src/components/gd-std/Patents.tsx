import Image from "next/image";
import React from "react";

import patent1 from "src/assets/gd-std/patent1.webp";
import patent2 from "src/assets/gd-std/patent2.webp";
import patent3 from "src/assets/gd-std/patent3.webp";
import patent4 from "src/assets/gd-std/patent4.webp";
import patent5 from "src/assets/gd-std/patent5.webp";
import UnderscoredText from "../UnderscoredText";

function Patents() {
  return (
    <section className="grid gap-16 px-20 pt-40">
      <div className="grid grid-cols-2 gap-x-6 gap-y-16">
        {patents.map((patent, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 text-white last:translate-x-[calc(50%+12px)]">
            <UnderscoredText>{patent.title}</UnderscoredText>
            <Image src={patent.img} alt="patent" />
          </div>
        ))}
      </div>
    </section>
  );
}

const patents = [
  { title: "鋼構建材之翻轉加工規劃方法", img: patent5 },
  { title: "鋼構建材之鑽孔加工設計方法", img: patent1 },
  { title: "顯示螢幕之圖形化使用者介面", img: patent2 },
  { title: "鋼構之截角加工規劃方法", img: patent3 },
  { title: "鋼構建材之加工設計方法", img: patent4 },
];

export default Patents;
