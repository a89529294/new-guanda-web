import Image from "next/image";
import React from "react";

import ImageWithCard from "src/components/gd-std/ImageWithCard";

import hero from "src/assets/automation/automation-hero.webp";
import alt1 from "src/assets/automation/alt1.jpg";
import alt2 from "src/assets/automation/alt2.jpg";
import ImageSwitcher from "src/components/automation/ImageSwitcher";
import Footer from "src/components/Footer";

function automation() {
  return (
    // 60 is the height of the footer
    <div className="bg-black pb-[60px]">
      <Image src={hero} alt="hero" className="mx-auto w-4/5 pt-20 pb-24" />
      <ImageWithCard
        img={alt1}
        title="雙向送料手臂"
        desc="全新設計的送料手臂，分別為水平與垂直夾，可以依靠更大的開口和高精度的傳感器系統來實現自動化的送料方式(可以搭配手機APP操控)。"
        path="/"
        imgPos="left"
      />
      <ImageWithCard
        img={alt2}
        title="自動化橫移料架(入口/出口)"
        desc="實現自動化搬運材料，搭配手機APP配對料單及自動搬移，讓人力極少化。"
        path="/"
        imgPos="right"
      />
      <ImageSwitcher />
      <Footer />
    </div>
  );
}

export default automation;
