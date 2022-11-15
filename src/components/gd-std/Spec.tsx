import cx from "classix";
import React from "react";

function Spec() {
  return (
    <article className="flex-1 sm:w-full">
      <div className="mb-5 w-fit">
        <div className="before-red-circle after-red-circle relative sm:hidden" />
        <h2 className="border-t border-b border-light-red pb-1 pt-0.5 text-2xl font-bold text-white sm:border-none">
          機械規格
        </h2>
        <div className="before-red-circle after-red-circle relative -translate-y-[1px] sm:hidden" />
      </div>

      <Section title="允許的工作尺寸" items={sectionOneItems} />
      <Section title="加工性能" items={sectionTwoItems} markFourthItem />
      <Section title="機台尺寸" items={sectionThreeItems} secondColLarge />
    </article>
  );
}

function Section({
  title,
  items,
  secondColLarge,
  markFourthItem,
}: {
  title: string;
  items: [string, string][];
  secondColLarge?: boolean;
  markFourthItem?: boolean;
}) {
  return (
    <div className="whitespace-nowrap last:border-b last:border-white/40">
      <h3 className="border-y border-white/40 py-1 text-lg font-bold text-white">{title}</h3>
      <ul className="flex flex-col gap-3 py-3 leading-5 text-light-gray">
        {items.map(([key, value], i) => (
          <li
            className={cx("flex", markFourthItem && "[&:nth-child(4)]:text-bright-light-green")}
            key={i}>
            <span className="flex-1">{key}</span>
            <span className={cx("w-44", secondColLarge ? "sm:w-48" : "sm:w-32")}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const sectionOneItems: [string, string][] = [
  ["腹板高度", "75~500mm"],
  ["水瓶鑽孔頭", "150~1050mm"],
  ["最短加工長度", "2400mm"],
  ["最大加工長度", "99999mm"],
];

const sectionTwoItems: [string, string][] = [
  ["垂直鑽孔頭", "1"],
  ["水瓶鑽孔頭", "2"],
  ["每一垂直鑽孔頭的主軸", "1"],
  ["每一水平鑽孔頭的主軸", "1"],
  ["輔助軸最大行程", "300mm"],
  ["最大孔徑", "Ø40"],
  ["最大板厚", "80mm"],
  ["主軸最大功率", "15kw and 11kw"],
  ["刀把規格", "BT40"],
  ["主軸轉速", "180~400RPM"],
  ["鑽孔軸進給速", "40~1000mm/min"],
  ["鑽孔軸軸向移動速度", "24M/min"],
];

const sectionThreeItems: [string, string][] = [
  ["長", "5450mm(不含排屑機)"],
  ["寬", "2000mm(不含凸出附件)"],
  ["高", "2000mm(不含凸出附件)"],
  ["機台重量", "14.5ton"],
];

export default Spec;
