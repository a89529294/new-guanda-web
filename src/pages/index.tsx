import ScreenOne from "src/components/Home/ScreenOne";
import ScreenTwo from "src/components/Home/ScreenTwo";
import ScreenThree from "src/components/Home/ScreenThree";
import ScreenFour from "src/components/Home/ScreenFour";
import ScreenFive from "src/components/Home/ScreenFive";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    let root = document.documentElement;
    if (!target) return;

    let callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting) root.style.setProperty("--mobile-nav", "rgb(24 26 29 / 0.6)");
        else root.style.setProperty("--mobile-nav", "rgb(203 213 225 / 0.6)");
      });
    };

    let observer = new IntersectionObserver(callback, { threshold: 0.45 });
    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="no-scrollbar max-h-screen snap-y snap-mandatory">
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      {/* 60px is the height of the footer, need this to fix scroll snap bug on mobile */}
      <div ref={ref} className="sm:pb-[60px]">
        <ScreenFour />
        <ScreenFive />
      </div>
    </div>
  );
}
