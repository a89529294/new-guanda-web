import type { AppProps } from "next/app";
import { Noto_Sans_TC } from "@next/font/google";
import Layout from "../components/Layout";

import "../styles/globals.css";

const notoSansTC = Noto_Sans_TC({ weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={notoSansTC.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
