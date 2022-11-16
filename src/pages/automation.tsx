import React from "react";
import Image from "next/image";

import ImageWithCard from "src/components/automation/ImageWithCard";

import alt1 from "src/assets/automation/alt1.jpg";
import alt2 from "src/assets/automation/alt2.jpg";
import hero from "src/assets/automation/automation-hero.webp";
import ImageSwitcher from "src/components/automation/ImageSwitcher";
import Footer from "src/components/Footer";
import BackgroundFadedLogo from "src/components/BackgroundFadedLogo";

function Automation() {
  return (
    <div className="relative isolate bg-black pb-[var(--footer-height)] sm:pb-0">
      <BackgroundFadedLogo className="top-1/2 -right-100 z-20 -translate-y-1/2 sm:hidden" />
      <Image
        src={hero}
        alt="hero"
        className="mx-auto w-4/5 pt-20 pb-24 sm:w-full sm:pt-4 sm:pb-10"
        priority
      />
      <ImageWithCard
        img={alt1}
        title="雙向送料手臂"
        desc="全新設計的送料手臂，分別為水平與垂直夾，可以依靠更大的開口和高精度的傳感器系統來實現自動化的送料方式(可以搭配手機APP操控)。"
        path="/"
        imgPos="left"
        className="relative z-10"
      />
      <ImageWithCard
        img={alt2}
        title="自動化橫移料架(入口/出口)"
        desc="實現自動化搬運材料，搭配手機APP配對料單及自動搬移，讓人力極少化。"
        path="/"
        imgPos="right"
        className="relative z-30"
      />
      <div className="relative">
        <BackgroundFadedLogo className="-left-48 -top-68 z-40 sm:hidden" />
      </div>
      <ImageSwitcher />
      <Footer />
    </div>
  );
}

export default Automation;
