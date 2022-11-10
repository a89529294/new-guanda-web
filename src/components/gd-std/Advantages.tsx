import React from "react";

function Advantages() {
  return (
    <div className="bg-chaos-black py-16">
      <div className="mx-auto mb-3 w-fit">
        <div className="before-red-circle after-red-circle relative" />
        <h2 className="border-t border-b border-light-red pb-1 pt-0.5 text-[41px] font-bold leading-tight text-white">
          S<span className="text-light-red">T</span>D-105
        </h2>
        <div className="before-red-circle after-red-circle relative -translate-y-[1px]" />
      </div>
      <h2 className="mb-12 text-center text-4xl font-bold text-white">11項優勢</h2>
      <ul className="mx-auto grid w-fit grid-flow-col grid-cols-[auto_auto] grid-rows-6 gap-y-5 gap-x-36">
        {advantages.map(([key, value], i) => (
          <li key={i} className="flex items-start gap-5">
            <span className="grid aspect-square w-8 place-items-center rounded-full bg-logo-red text-xl text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{key}</h3>
              <p className="text-light-gray">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const advantages: [string, string][] = [
  ["TEKLA 無縫接軌移轉", "不只轉檔、還有TEKLA的報表相關構件資料"],
  ["自動可3D參數式排版", ""],
  ["全自動化加工", "自動送料、自動進料、自動加工及換刀、自動出料"],
  ["採用鎢化鋼高硬度鑽頭", "最速可達：9mm/s進給量"],
  ["採用MQL切削油系統", "提高數倍潤滑效果且環保無毒"],
  ["手機APP", "可無線操作機台及周邊料架設備包含監控加工數據"],
  ["19吋多點式觸控螢幕", "全中文化介面，也包含多國語言"],
  ["3D模型及3D影像追蹤", "廠區監控"],
  ["4項發明專利", ""],
  ["現場操作人員教育訓練簡單快速", ""],
  ["整機設備：MIT生產，在地維修", ""],
];

export default Advantages;
