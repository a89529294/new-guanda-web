import cx from "classix";
import React, { ElementType, ReactNode } from "react";

function Table() {
  return (
    <div className="sm:overflow-x-scroll">
      <table className="border-collapse border border-white/40 sm:w-[767px]">
        <thead>
          <tr className="text-left text-lg font-bold text-white">
            <BorderedCell as="th" />
            <BorderedCell as="th">烙印法</BorderedCell>
            <BorderedCell as="th">電焊法</BorderedCell>
            <BorderedCell as="th">號碼牌</BorderedCell>
          </tr>
        </thead>
        <tbody>
          <tr className="text-light-gray">
            <BorderedCell className="text-lg font-bold text-white" mlSize="md">
              優點
            </BorderedCell>
            <BorderedCell>無需委外加工</BorderedCell>
            <BorderedCell>字體清楚</BorderedCell>
            <BorderedCell>
              字體清楚 <br /> 尋料迅速
            </BorderedCell>
          </tr>
          <tr className="text-light-gray">
            <BorderedCell className="text-lg font-bold text-white" mlSize="md">
              缺點
            </BorderedCell>
            <BorderedCell>
              字體不明 <br /> 尋料不便利
            </BorderedCell>
            <BorderedCell>
              形狀不好看 <br /> 費時又費工
            </BorderedCell>
            <BorderedCell>需專業設備加工</BorderedCell>
          </tr>
          <tr className="text-light-gray">
            <BorderedCell className="text-lg font-bold text-white" mlSize="md">
              成本分析
            </BorderedCell>
            <BorderedCell>
              <ul className="list-inside list-disc">
                <li>工資：5.2元/分</li>
                <li>設定平均敲打編號為：2分鐘/支</li>
                <li>
                  2分鐘Ｘ5支Ｘ5.2元＝<span className="text-light-red">52元</span>
                </li>
                <li className="text-logo-red">不包含現場尋料的工資成本</li>
              </ul>
            </BorderedCell>
            <BorderedCell>
              <ul className="list-inside list-disc">
                <li>工資：5.2元/分</li>
                <li>設定平均敲打編號為：5分鐘/支</li>
                <li>
                  5分鐘Ｘ5支Ｘ5.2元＝<span className="text-light-red">130元</span>
                </li>
                <li className="text-logo-red">不包含現場尋料的工資成本</li>
              </ul>
            </BorderedCell>
            <BorderedCell>
              <ul className="list-inside list-disc">
                <li>工資：無</li>
                <li>每片均價：7元</li>
                <li>
                  7元Ｘ5支＝<span className="text-bright-light-green">35元</span>
                </li>
              </ul>
            </BorderedCell>
          </tr>
          <tr className="text-light-gray">
            <BorderedCell className="text-lg font-bold text-white" mlSize="md">
              評價
            </BorderedCell>
            <BorderedCell>劣</BorderedCell>
            <BorderedCell>劣</BorderedCell>
            <BorderedCell className="text-bright-light-green">優</BorderedCell>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function BorderedCell({
  as = "td",
  children,
  className,
  mlSize = "lg",
}: {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  mlSize?: "lg" | "md";
}) {
  const As = as;
  const mlSizes = {
    lg: "pl-4",
    md: "pl-2.5",
  };
  return <As className={cx("border border-white/40", mlSizes[mlSize], className)}>{children}</As>;
}

export default Table;
