import ScreenOne from "src/components/Home/ScreenOne";
import ScreenTwo from "src/components/Home/ScreenTwo";
import ScreenThree from "src/components/Home/ScreenThree";
import ScreenFour from "src/components/Home/ScreenFour";
import ScreenFive from "src/components/Home/ScreenFive";

export default function Home() {
  return (
    <div className="no-scrollbar max-h-screen snap-y snap-mandatory">
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      {/*  <ScreenFive /> */}
    </div>
  );
}
