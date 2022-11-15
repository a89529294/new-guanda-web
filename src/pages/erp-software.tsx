import React from "react";
import Image from "next/image";

import BackgroundTriangle from "src/components/BackgroundTriangle";
import GreenCircle from "src/components/GreenCircle";
import UnderscoredText from "src/components/UnderscoredText";
import Functionalities from "src/components/erp-software/Functionalities";
import LinkButton from "src/components/LinkButton";

import circleApp from "src/assets/circle-app.svg";
import circleGdErp from "src/assets/circle-gd-erp.svg";
import circleQr from "src/assets/circle-qr.svg";
import bltr from "src/assets/erp-software/green-arrows-bl-tr.svg";
import tlbr from "src/assets/erp-software/green-arrows-tl-br.svg";
import hr from "src/assets/erp-software/green-arrows-hr.svg";
import func1 from "src/assets/erp-software/app-func-1.webp";
import func2 from "src/assets/erp-software/app-func-2.webp";
import func3 from "src/assets/erp-software/app-func-3.webp";
import func4 from "src/assets/erp-software/app-func-4.webp";
import func5 from "src/assets/erp-software/app-func-5.webp";
import func6 from "src/assets/erp-software/app-func-6.webp";
import SandwitchedText from "src/components/SandwitchedText";
import Footer from "src/components/Footer";

function ErpSoftware() {
  return (
    <div className="relative isolate grid gap-32 bg-aswad-black pt-44 pb-32">
      <BackgroundTriangle />

      <div className="grid justify-items-center gap-14 justify-self-center text-white">
        <UnderscoredText>鋼結構導入大數據、人員數據化！</UnderscoredText>
        <div className="grid grid-cols-3 place-items-center gap-x-16">
          <Image
            src={bltr}
            alt="decoration"
            className="relative left-1/2 top-1/2 translate-x-1/4 -translate-y-1/2"
          />
          <GreenCircle image={circleGdErp} label="GD-ERP" subLabel="辦公室軟體" bold />
          <Image
            src={tlbr}
            alt="decoration"
            className="relative right-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2"
          />
          <GreenCircle image={circleApp} label="手機App" bold />
          <Image src={hr} alt="decoration" />
          <GreenCircle image={circleQr} label="QR鐵牌" bold />
        </div>
      </div>

      <div className="grid grid-cols-[62.5%_37.5%] items-start">
        <Functionalities />
        <div className="grid gap-7 px-20 pt-40 text-white">
          <p className="text-lg">
            由Tekla的BOM報表，匯入GD-ERP軟體再搭配廣達機械研發的QR鐵牌及手機App(掃描軟體)，可以讓使用者清楚掌管專案與人員進度管理。
          </p>
          <LinkButton label="立即諮詢" path="/" />
        </div>
      </div>

      <div className="grid gap-14">
        <div className="justify-self-center text-white">
          <UnderscoredText>GD-ERP手機App功能</UnderscoredText>
          <h3 className="mt-2 text-center text-light-gray">- iPAD也適用 -</h3>
        </div>
        <ul className="flex gap-10 px-12">
          {cellphoneFunctions.map((func, i) => (
            <li key={i} className="flex flex-col items-center text-center text-white">
              <Image src={func.img} alt="" className="mb-5" />
              <SandwitchedText>{func.title}</SandwitchedText>
              {typeof func.desc === "string" ? <p className="mt-3">{func.desc}</p> : <func.desc />}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

const cellphoneFunctions = [
  { img: func1, title: "工項紀錄", desc: "紀錄構件所有工項的人員名冊" },
  {
    img: func2,
    title: "PDF圖檔",
    desc: () => (
      <ol className="mt-3 ">
        <li className="list-decimal">構件PDF</li>
        <li className="list-decimal">安裝PDF</li>
        <li className="list-decimal">原設計圖PDF</li>
      </ol>
    ),
  },
  { img: func3, title: "圖表分析", desc: "專案即時進度圖表分析" },
  { img: func4, title: "待出貨區", desc: "即時查詢構件的置放位置不浪費人力資源" },
  { img: func5, title: "安裝資訊", desc: "顯示安裝位置及高程長度與重量一併顯示" },
  { img: func6, title: "工地導覽", desc: "讓人員輕鬆知道工地位置" },
];

export default ErpSoftware;
