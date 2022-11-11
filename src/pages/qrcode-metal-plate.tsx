import React, { ReactNode } from "react";
import Image from "next/image";

import BackgroundTriangle from "src/components/BackgroundTriangle";
import QRCodePlate from "src/components/QRCodePlate";
import SandwitchedText from "src/components/SandwitchedText";
import RedCircleLabel from "src/components/RedCircleLabel";
import Table from "src/components/qrcode-metal-plate/Table";
import SquareListItem from "src/components/qrcode-metal-plate/SquareListItem";

import importance_1_1 from "src/assets/qrcode-metal-plate/importance-1-1.jpg";
import importance_1_2 from "src/assets/qrcode-metal-plate/importance-1-2.jpg";
import importance_1_3 from "src/assets/qrcode-metal-plate/importance-1-3.jpg";
import doubleDownArrows from "src/assets/qrcode-metal-plate/double-downwards-arrows.svg";
import doubleUpArrows from "src/assets/qrcode-metal-plate/double-upwards-arrows.svg";
import Footer from "src/components/Footer";

function QRCodeMetalPlate() {
  return (
    <div className="relative isolate bg-aswad-black">
      <BackgroundTriangle />

      <QRCodePlate size="lg" className="top-60 mx-auto mb-96 grid w-fit place-items-center" />

      <section className="bg-chaos-black px-14 pt-20 pb-28">
        <SandwitchedText fontSize="lg">構件標記的重要性（一）</SandwitchedText>
        <h3 className="before-white-square after-white-square relative mx-auto mt-20 mb-5 w-fit text-3xl text-white">
          鋼構構件的標記方法
        </h3>
        <article className="mb-24 grid gap-4 border-y">
          {/* 構件標記的重要性（一） ROW ONE */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Image src={importance_1_1} alt="" className="h-full object-cover" />
              <RedCircleLabel className="absolute top-3 left-5">A</RedCircleLabel>
            </div>
            <div className="relative flex-1">
              <Image src={importance_1_2} alt="" className="h-full object-cover" />
              <RedCircleLabel className="absolute top-3 left-5">B</RedCircleLabel>
            </div>
            <div className="flex flex-1 flex-col justify-between pt-8 pl-5 text-white">
              <ul className="grid gap-4">
                <li className="flex items-center gap-2.5 text-2xl">
                  <RedCircleLabel>A</RedCircleLabel>
                  烙(鋼)印法
                </li>
                <li className="grid grid-cols-[auto_1fr] items-center gap-x-2.5 gap-y-1.5">
                  <RedCircleLabel>B</RedCircleLabel>
                  <p className="text-2xl">電焊寫字法</p>
                  <ol className="col-start-2 list-inside text-light-gray">
                    <li className="list-decimal">成本太高(費時又耗工)且不美觀</li>
                    <li className="list-decimal">安裝找料時，經常性“鋼印面朝下</li>
                  </ol>
                </li>
              </ul>
              <div className="flex items-start gap-2.5 bg-white/[0.07] p-5">
                <Image src={doubleDownArrows} alt="decoration" className="translate-y-2" />
                <p className="text-center">
                  烙印、電焊寫字的方式，現場尋料極為不便之情況，導致人員與吊車成本的增加。
                </p>
                <Image src={doubleDownArrows} alt="decoration" className="translate-y-2" />
              </div>
            </div>
          </div>

          {/* 構件標記的重要性（一） ROW TWO */}
          <div className="flex gap-4">
            <div className="relative w-3/5 shrink-0">
              <Image src={importance_1_3} alt="" className="h-full object-cover" />
              <RedCircleLabel className="absolute top-3 left-5">C</RedCircleLabel>
            </div>

            <div className="grid content-start gap-7 pt-5">
              <div className="flex gap-2.5 text-2xl text-white">
                <RedCircleLabel>C</RedCircleLabel>
                號碼牌
              </div>
              <div className="flex items-start gap-2.5 bg-white/[0.07] p-5">
                <Image src={doubleUpArrows} alt="decoration" className="translate-y-2" />
                <div className="grid gap-4 text-white">
                  <p>
                    成本固定
                    <span className="text-bright-light-green">(費用不超過工程照價的0.001%)</span>
                    ，可搭配安裝方向固定於構件上，不輕易脫落且
                    <span className="text-bright-light-green">字深可達1.4mm</span>
                    ，辨識度清楚，絕不浪費客戶的任何成本。
                  </p>
                  <p>
                    現場安裝時，非常好辨識且完全不會浪費不必要的尋料等待時間，重點是牌子固定於鋼梁(柱)的頭尾端與安裝方式對應且不會脫落！
                  </p>
                </div>
                <Image src={doubleUpArrows} alt="decoration" className="translate-y-2" />
              </div>
            </div>
          </div>
        </article>

        <SandwitchedText fontSize="lg">構件標記的重要性（二）</SandwitchedText>
        <div className="mt-14 grid grid-cols-[auto_auto] gap-8 bg-white/[0.07] p-4 text-white">
          <div className="flex flex-col justify-between">
            <SquareListItem
              title="標記的優點"
              items={["迅速找料", "立即辨識安裝方向", "可搭配進銷存報表"]}
            />
            <SquareListItem
              title="方法與成本分析比較表(設定條件如下)"
              items={[
                <>
                  工資為2500元/天,工時換算2500元/8小時/60分
                  <br />
                  <span className="ml-6 text-lg text-bright-light-green">5.2元/分鐘</span>
                </>,
                "構件編號：5個字體/支",
                "構件數量：5支",
              ]}
            />
          </div>
          <Table />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default QRCodeMetalPlate;
