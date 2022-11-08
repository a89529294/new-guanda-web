import { ReactNode } from "react";
import cx from "classix";
import Image from "next/image";
import Link from "next/link";

import Footer from "src/components/Footer";

import arrow from "src/assets/arrow.svg";
import erp from "src/assets/index-erp-hd.png";
import circleApp from "src/assets/circle-app.svg";
import circleGdErp from "src/assets/circle-gd-erp.svg";
import circleQr from "src/assets/circle-qr.svg";
import gdPlate from "src/assets/gd-plate.jpg";
import indexLastOne from "src/assets/index-last-1.jpg";
import indexLastTwo from "src/assets/index-last-2.jpg";
import indexLastThree from "src/assets/index-last-3.jpg";
import indexLastFour from "src/assets/index-last-4.jpg";

export default function Home() {
  return (
    <div className="no-scrollbar max-h-screen snap-y snap-mandatory">
      <Screen className="relative bg-[url('/assets/index-bg-1.jpg')] bg-cover bg-left-bottom">
        <div className="absolute bottom-11 flex gap-4 text-4xl font-bold text-white before:block  before:h-10 before:w-12 before:border-r-[3px] before:bg-logo-red">
          以創意♥︎科技，打造綠色E世界
        </div>
      </Screen>

      <Screen className="relative bg-[url('/assets/index-bg-2.jpg')] bg-cover bg-right-bottom">
        <Card title="GD-STD" sub="在地生產、在地維修，操作簡單快速的自動化設備。" path="/" />
      </Screen>

      <Screen className="relative bg-[url('/assets/index-bg-3.jpg')] bg-cover bg-top">
        <Card title="自動化產線" sub="自動化產線搭配APP操作，實現便利科技。" path="/" />
      </Screen>

      {/* pt-[74px] takes nav height into account */}
      <Screen className="relative isolate grid place-content-center gap-14 bg-aswad-black pt-[74px] ">
        <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,300px_0,100%_75%,100%_100%,0_100%)]" />
        {/* erp image plus card container */}
        <div className="flex gap-14">
          <Image src={erp} alt="erp" className="w-[740px]" />
          <SimpleCard
            title="ERP軟體"
            sub="清晰的專案管理，搭配手機掃描軟體，輕鬆掌握各人員進度。"
            path="/"
          />
        </div>
        {/* three red circles */}
        <div className=" flex items-center gap-10 justify-self-center">
          <RedCircle image={circleApp} label="手機App" />
          <TripleDots />
          <RedCircle image={circleGdErp} label="GD-ERP" />
          <TripleDots />
          <RedCircle image={circleQr} label="QR鐵牌" />
        </div>
      </Screen>

      {/* pt-[74px] takes nav height into account, pb-[60px] takes footer into account */}
      <Screen className="relative isolate grid content-center justify-items-center gap-20 bg-aswad-black pt-[74px] pb-[60px]">
        <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,300px_0,100%_75%,100%_100%,0_100%)]" />
        <div className="flex items-center gap-72 ">
          <div className="relative translate-y-10">
            <div className="absolute left-[15%] -top-2 h-5 w-1/2 -translate-y-full border border-b-0 ">
              <div className="absolute left-[30%] h-10 w-[70%] -translate-y-full border-l after:absolute after:bottom-[1px] after:block after:w-full after:border-b-[3px] after:border-light-red">
                <span className="absolute -top-2 -translate-y-full whitespace-nowrap text-white">
                  構件編號
                </span>
              </div>
            </div>
            <div className="absolute right-[4%] -top-2 h-5 w-1/4 -translate-y-full border border-b-0 ">
              <div className="absolute left-[30%] h-5 w-[70%] -translate-y-full border-l after:absolute after:bottom-[1px] after:block after:w-full after:border-b-[3px] after:border-light-red">
                <span className="absolute -top-2 -translate-y-full whitespace-nowrap text-white">
                  實體二維碼
                </span>
              </div>
            </div>
            <Image src={gdPlate} alt="gd-place" width={345} />
            <div className="absolute bottom-0 -left-2 h-[38%] w-6 -translate-y-[35%] -translate-x-full border border-r-0">
              <div className="absolute bottom-[30%] h-[70%] w-7 -translate-x-full border-b after:absolute after:right-[1px] after:block after:h-full after:border-r-[3px] after:border-light-red">
                <span className="absolute bottom-0 -left-2 -translate-x-full whitespace-nowrap leading-none text-white">
                  車次符號
                </span>
              </div>
            </div>
          </div>
          <SimpleCard
            title="QRcode鐵牌"
            sub="辨識清晰、構件標記更明確，使尋料更快速準確，不浪費您的時間。"
            path="/"
          />
        </div>

        <div className="flex gap-3">
          <Image src={indexLastOne} alt="" className="" />
          <Image src={indexLastTwo} alt="" />
          <Image src={indexLastThree} alt="" />
          <Image src={indexLastFour} alt="" />
        </div>
        <Footer />
      </Screen>
    </div>
  );
}

function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("h-screen snap-start", className)}>{children}</div>;
}

function Card({ title, sub, path }: { title: string; sub: string; path: string }) {
  return (
    <div className="absolute right-0 bottom-11 w-[470px] border-l-[3px] border-light-red bg-black/60 py-6 pl-8 text-white">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-3 mb-14">{sub}</p>
      <Link
        href={path}
        className="flex w-fit items-center gap-2.5 border border-white/[0.35] bg-[rgba(67,66,66,0.7)] py-2.5 px-5">
        <span>了解更多</span>
        <Image src={arrow} alt="arrow" />
      </Link>
    </div>
  );
}

function SimpleCard({ title, sub, path }: { title: string; sub: string; path: string }) {
  return (
    <div className="w-[375px] text-white">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-3 mb-14">{sub}</p>
      <Link
        href={path}
        className="ml-auto flex w-fit items-center gap-2.5 border border-white/[0.35] bg-[rgba(67,66,66,0.7)] py-2.5 px-5">
        <span>了解更多</span>
        <Image src={arrow} alt="arrow" />
      </Link>
    </div>
  );
}

function RedCircle({ image, label }: { image: any; label: string }) {
  return (
    <div className="grid justify-items-center gap-2.5">
      <Image src={image} alt="app" />
      <h2 className="text-xl text-white">{label}</h2>
    </div>
  );
}

function TripleDots() {
  return (
    // -translate-y-[19px] takes into account of (gap between circle and label plus label height)/2
    <div className="flex -translate-y-[19px] gap-4">
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
      <div className="h-[7px] w-[7px] rounded-full bg-white" />
    </div>
  );
}
