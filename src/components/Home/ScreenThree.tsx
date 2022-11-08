import React from "react";

import Screen from "./Screen";
import Card from "./Card";

function ScreenThree() {
  return (
    <Screen className="relative bg-[url('/assets/index-bg-3.jpg')] bg-cover bg-top">
      <Card title="自動化產線" sub="自動化產線搭配APP操作，實現便利科技。" path="/" />
    </Screen>
  );
}

export default ScreenThree;
