import React from "react";
import Card from "./Card";

import Screen from "./Screen";

function ScreenTwo() {
  return (
    <Screen className="relative bg-[url('/assets/index-bg-2.jpg')] bg-cover bg-right-bottom sm:bg-[url('/assets/index-bg-mobile-2.jpg')]">
      <Card title="GD-STD" sub="在地生產、在地維修，操作簡單快速的自動化設備。" path="/" />
    </Screen>
  );
}

export default ScreenTwo;
