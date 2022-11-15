import React from "react";

// TODO This is the same component as gd-std Advantages, make a reuseable component
function Functionalities() {
  return (
    <div className="bg-chaos-black pt-24 pb-36 pl-40 pr-32 sm:px-0 sm:pt-12 sm:pb-0">
      {/* TODO refactor this to use component */}
      <div className="mx-auto mb-3 w-fit ">
        <div className="before-red-circle after-red-circle relative" />
        <h2 className="border-t border-b border-light-red pb-1 pt-0.5 text-[41px] font-bold leading-tight text-white">
          <span className="text-light-red">G</span>D-E<span className="text-light-red">R</span>P
        </h2>
        <div className="before-red-circle after-red-circle relative -translate-y-[1px]" />
      </div>
      <h2 className="mb-16 text-center text-4xl font-bold text-white sm:text-3xl">8大功能</h2>
      <ul className="mx-auto grid w-fit grid-flow-col grid-cols-[auto_auto] grid-rows-4 gap-y-5 gap-x-40 sm:grid-flow-row sm:grid-cols-1">
        {functionalities.map(([key, value], i) => (
          <li key={i} className="flex items-start gap-5">
            <span className="grid aspect-square w-8 place-items-center rounded-full bg-logo-red text-xl text-white">
              {i + 1}
            </span>
            <div className="whitespace-nowrap">
              <h3 className="text-xl font-bold text-white">{key}</h3>
              <p className="text-light-gray">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const functionalities: [string, string][] = [
  ["專案管理", "報表、照片、圖面..."],
  ["權限分配", "公司、客戶、廠商..."],
  ["產能分析", "人員數據化"],
  ["PDF圖檔查詢", "構件圖、平立面圖"],
  ["進銷存記錄", "中龍、東和"],
  ["圖表分析", "專案戰情室"],
  ["手機監控", "查詢、掃描、監控、導航..."],
  ["待出貨區管制", "追蹤構件置放區域位置"],
];

export default Functionalities;
