import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import Layout from "../components/Layout";

import "../styles/globals.css";

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
    <Layout>
      <Head>
        <title>廣達國際機械</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
