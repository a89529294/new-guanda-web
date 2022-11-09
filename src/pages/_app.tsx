import type { AppProps } from "next/app";
import { Noto_Sans_TC } from "@next/font/google";
import Layout from "../components/Layout";

import "../styles/globals.css";
import { useEffect } from "react";

const notoSansTC = Noto_Sans_TC({ weight: ["400", "700"], subsets: ["chinese-traditional"] });

function calculateViewHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    calculateViewHeight();
    window.addEventListener("resize", calculateViewHeight);
    return () => window.removeEventListener("resize", calculateViewHeight);
  }, []);

  return (
    <Layout className={notoSansTC.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
