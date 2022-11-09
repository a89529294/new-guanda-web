import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import cx from "classix";

import logo from "src/assets/logo_small.png";

type LinkProp = { label: string; path: string };

const main_paths: LinkProp[] = [
  { label: "公司簡介", path: "/" },
  { label: "GD-STD", path: "/" },
  { label: "自動化產線", path: "/" },
  { label: "ERP軟體", path: "/" },
  { label: "QRcode鐵牌", path: "/" },
];
const side_paths: LinkProp[] = [
  { label: "聯絡我們", path: "/" },
  { label: "企業登入", path: "/" },
];

function Layout({ children, className }: { children: ReactNode; className?: string }) {
  const [showMenu, toggleMenu] = useState(false);

  return (
    <div className={cx("relative", className)}>
      <nav className="sm: fixed z-10 flex w-full bg-aswad-black sm:items-center sm:justify-between sm:bg-mobile-nav sm:px-10">
        <div className="w-56 py-3 pl-14 sm:pl-0">
          <Image src={logo} alt="logo" className="sm:w-20" />
        </div>
        {/* desktop nav */}
        <div className="relative flex-1 bg-white/30 pr-10 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)] sm:hidden">
          <div className="absolute inset-0 left-[1px] flex bg-[#101010] pr-10 pl-32 pt-8 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)]">
            <ul className="flex gap-11 xl:gap-6">
              {main_paths.map((page, i) => (
                <MyLink page={page} key={i} />
              ))}
            </ul>
            <ul className="ml-auto flex gap-5 xl:gap-3 lg:hidden">
              {side_paths.map((page, i) => (
                <MyLink page={page} key={i} className="last:text-[#909090]" />
              ))}
            </ul>
          </div>
        </div>
        {/* mobile burger */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="hidden h-6 w-6 stroke-white sm:block"
          onClick={() => toggleMenu(true)}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {/* mobile menu */}
        {showMenu && (
          <div
            className="fixed inset-0 hidden bg-zinc-700/50 sm:block"
            onClick={() => toggleMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="absolute top-5 right-5 h-6 w-6 stroke-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div
              className="ml-auto flex h-full w-3/5 flex-col bg-white p-10"
              onClick={(e) => e.stopPropagation()}>
              <ul className="grid gap-5">
                {main_paths.map((page, i) => (
                  <li key={i}>
                    <Link href={page.path}>{page.label}</Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-auto grid gap-5">
                {side_paths.map((page, i) => (
                  <li key={i} className="last:text-gray-500">
                    <Link href={page.path}>{page.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
      {children}
    </div>
  );
}

function MyLink({ className, page }: { className?: string; page: LinkProp }) {
  return (
    <li className={cx("flex flex-col text-white", className)}>
      <Link href={page.path} className="peer">
        {page.label}
      </Link>
      <span className="mt-auto bg-[#2AFD58] peer-hover:h-[3px]" />
    </li>
  );
}

export default Layout;
