import ScreenOne from "src/components/Home/ScreenOne";
import ScreenTwo from "src/components/Home/ScreenTwo";
import ScreenThree from "src/components/Home/ScreenThree";
import ScreenFour from "src/components/Home/ScreenFour";
import ScreenFive from "src/components/Home/ScreenFive";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target1 = ref1.current;
    // const target2 = ref2.current;
    if (!target1) return;

    let root = document.documentElement;
    let temp = { screen4: false, screen5: false };
    let callback = (entries: any[], observer: any) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting) root.style.setProperty("--mobile-nav", "rgb(24 26 29 / 0.6)");
        else root.style.setProperty("--mobile-nav", "rgb(203 213 225 / 0.6)");

        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };

    let observer = new IntersectionObserver(callback, { threshold: 0.45 });
    observer.observe(target1);
    // observer.observe(target2);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="no-scrollbar max-h-screen snap-y snap-mandatory">
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <div ref={ref1}>
        <ScreenFour />
        <ScreenFive />
      </div>
    </div>
  );
}
