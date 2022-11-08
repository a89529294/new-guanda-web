import React from "react";

import Screen from "./Screen";

function ScreenOne() {
  return (
    <Screen className="relative bg-[url('/assets/index-bg-1.jpg')] bg-cover bg-left-bottom sm:bg-[60%_0%]">
      <div className="absolute bottom-11 flex gap-4 text-4xl font-bold text-white before:block  before:h-10 before:w-12 before:border-r-[3px] before:bg-logo-red sm:text-center sm:text-5xl sm:leading-normal sm:before:hidden">
        以創意♥︎科技，打造綠色E世界
      </div>
    </Screen>
  );
}

export default ScreenOne;
