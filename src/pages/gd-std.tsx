import Image from "next/image";
import React from "react";

import BackgroundTriangles from "src/components/BackgroundTriangles";
import Card from "src/components/Card";
import BorderedImageWithDesc from "src/components/gd-std/BorderedImageWithDesc";
import ImageWithCard from "src/components/gd-std/ImageWithCard";

import hero from "src/assets/gd-std/hero.webp";
import heroSub1 from "src/assets/gd-std/hero-sub-1.jpg";
import heroSub2 from "src/assets/gd-std/hero-sub-2.jpg";
import alt1 from "src/assets/gd-std/alt-1.jpg";
import alt2 from "src/assets/gd-std/alt-2.jpg";
import alt3 from "src/assets/gd-std/alt-3.jpg";
import bordered1 from "src/assets/gd-std/bordered-img-1.jpg";
import bordered2 from "src/assets/gd-std/bordered-img-2.jpg";
import Spec from "src/components/gd-std/Spec";
import Advantages from "src/components/gd-std/Advantages";
import Patents from "src/components/gd-std/Patents";
import Footer from "src/components/Footer";
import BackgroundFadedLogo from "src/components/BackgroundFadedLogo";

// TODO add background logos
function Gdtsd() {
  return (
    <div className="relative isolate bg-aswad-black pt-40 pb-36 sm:bg-black sm:px-8 sm:pt-14 sm:pb-8">
      <BackgroundTriangles />
      <BackgroundFadedLogo className="top-48 -left-48 -z-10 sm:top-48 sm:-left-16" />
      <BackgroundFadedLogo className="top-1/4 -right-100 -z-10 -translate-y-1/2 sm:hidden" />

      <Image src={hero} alt="machine" priority className="mx-auto w-1/3 sm:w-3/5" />
      <div className="mb-12 mt-16 flex gap-6 px-10 sm:my-9 sm:flex-col sm:px-0">
        <Image src={heroSub1} alt="" />
        <Image src={heroSub2} alt="" />
      </div>
      <Card
        title="左右軸換刀裝置"
        sub="左右側主軸的刀具都搭配全新雙向各4個定位換刀系統，可以容納各式各樣的刀具 種類(可以搭配手機APP使用)。"
        path="/"
        size="fixed"
        className="mx-auto mb-40"
      />
      <ImageWithCard
        img={alt1}
        title="上軸換刀裝置"
        desc="自動化換刀裝置通過數控系統管理,並在上主軸配有5個定位換刀系統(可以搭配手機APP使用)。"
        path="/"
        imgPos="left"
      />
      <ImageWithCard
        img={alt2}
        title="擴展輔助Y軸向移動"
        desc="每個主軸上可用的Y軸行程,延長至 300mm,通過將材料保持在適當位置來執行加工操作。 三個主軸軸向皆可獨立加工，並轉化為 更大的靈活性和無與倫比的生產力。"
        path="/"
        imgPos="right"
      />
      <ImageWithCard
        img={alt3}
        title="單一CNC控制單元"
        desc="當鋼印機或入口/出口橫移自動料架結合使用時，無須添加額外的CNC控制單元。"
        path="/"
        imgPos="left"
      />
      <div className="mx-auto mt-28 mb-44 flex w-fit gap-16 text-white sm:mt-0 sm:mb-32 sm:flex-col sm:gap-24">
        <BorderedImageWithDesc
          img={bordered1}
          title="MQL油霧切削潤滑系統"
          desc="中心出油、耗油低,鑽孔及在深孔加工有良好的表現。"
        />
        <BorderedImageWithDesc
          img={bordered2}
          title="硬質合金鑽孔"
          desc="憑藉高轉速,可實現主軸硬質合金 刀具的最大效率。"
          className="mt-28 sm:mt-0"
        />
      </div>
      <div className="relative ml-32 mr-48 flex items-start gap-28 sm:m-0 sm:flex-col sm:gap-2">
        <Image src={hero} alt="" className="w-64 flex-1 sm:self-end" />
        <Spec />
        <BackgroundFadedLogo className="-left-80 -top-44  -z-10 sm:-top-16 sm:-left-28" />
      </div>
      <Advantages />
      <Patents />
      <Footer />
    </div>
  );
}

export default Gdtsd;
