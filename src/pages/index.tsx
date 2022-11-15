import ScreenOne from "src/components/Home/ScreenOne";
import ScreenTwo from "src/components/Home/ScreenTwo";
import ScreenThree from "src/components/Home/ScreenThree";
import ScreenFour from "src/components/Home/ScreenFour";
import ScreenFive from "src/components/Home/ScreenFive";

export default function Home() {
  return (
    <div className="no-scrollbar max-h-screen-minus-nav snap-y snap-mandatory">
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      {/* 60px is the height of the footer, need this to fix scroll snap bug on mobile */}
      {/* previously needed sm:pb-[60px] now footer is hidden check later */}
      <ScreenFour />
      <ScreenFive />
    </div>
  );
}
