import React from "react";

import Screen from "./Screen";

function ScreenOne() {
  return (
    <Screen className="relative bg-[url('/assets/index-bg-1.jpg')] bg-cover bg-left-bottom sm:bg-[url('/assets/index-bg-mobile-1.jpg')] sm:bg-right-top">
      <div className="absolute bottom-11 flex gap-4  font-bold  before:block  before:h-10 before:w-12 before:border-r-[3px] before:bg-logo-red ">
        <span className="text-4xl text-white sm:text-3xl sm:leading-normal">
          以創意<span className="text-light-red">♥︎</span>科技，
          <br className="hidden sm:block" />
          打造綠色<span className="text-light-green">E</span>世界
        </span>
      </div>
    </Screen>
  );
}

export default ScreenOne;
