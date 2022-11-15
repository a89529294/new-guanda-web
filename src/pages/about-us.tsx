import Image from "next/image";
import React from "react";

import logoAboutUs from "src/assets/logo_about_us.png";
import tm1 from "src/assets/about-us/trademark1.jpg";
import tm2 from "src/assets/about-us/trademark2.jpg";
import tm3 from "src/assets/about-us/trademark3.jpg";
import tm4 from "src/assets/about-us/trademark4.jpg";
import tm5 from "src/assets/about-us/trademark5.jpg";
import Footer from "src/components/Footer";
import BackgroundTriangles from "src/components/BackgroundTriangles";
import UnderscoredText from "src/components/UnderscoredText";

// TODO add the background logos
function aboutUs() {
  return (
    //320 is the width of the big logo image
    <div className="relative isolate grid grid-cols-[calc((100%-320px)/2)_auto_auto_188px] gap-y-28 bg-aswad-black pt-44 pb-32 sm:grid-cols-1 sm:justify-items-center sm:gap-10 sm:bg-black sm:px-8 sm:pt-16 sm:pb-12">
      <BackgroundTriangles />
      <Image src={logoAboutUs} alt="logo" className="col-start-2 w-80 sm:col-start-1 sm:w-52" />
      <div className="col-span-2 col-start-2 row-start-2 grid justify-items-start gap-10 text-white sm:col-span-1 sm:col-start-1">
        <UnderscoredText>
          以創意<span className="text-light-red">♥︎</span>科技，打造綠色
          <span className="text-light-green">E</span>世界
        </UnderscoredText>
        <p className="text-lg">
          廣達國際機械是為了解決鋼構加工需求而存在的。
          廣是「廣思集益」意味著透過團隊經由反覆討論而得出滿足客戶需求的最佳方案，過程就像是廣收各方意見，再萃取出智慧。
          達是「達權知變」意指當團隊面對客戶各式各樣需求時，能不墨守成規，因地制宜地提出最適當方案。
        </p>
        <p>
          國際則是期許團隊從台灣出發，進而立足國際市場。再者，秉持「以創意科技為動力，讓產品更加人性與便利」的產品開發設計理念，廣達國際團隊更期許自己能以創意科技為基底，為客戶打造出最人性化與便利化的鋼構加工設備產品。
        </p>
      </div>
      <div className="col-span-2 col-start-2 row-start-3 grid grid-cols-2 gap-5 sm:col-span-1 sm:col-start-1 sm:grid-cols-1">
        <Image src={tm1} alt="trade mark 1" />
        <Image src={tm2} alt="trade mark 2" />
        <Image src={tm4} alt="trade mark 4" />
        <Image src={tm5} alt="trade mark 5" />
      </div>
      <Footer />
    </div>
  );
}

export default aboutUs;
