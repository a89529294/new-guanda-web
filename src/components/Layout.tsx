import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
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
  return (
    <div className={cx("relative", className)}>
      <nav className="fixed z-10 flex w-full bg-aswad-black">
        <div className="w-56 py-3 pl-14">
          <Image src={logo} alt="logo" />
        </div>
        <div className="relative flex-1 bg-white/30 pr-10 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)]">
          <div className="absolute inset-0 left-[1px] flex bg-[#101010] pr-10 pl-32 pt-8 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)]">
            <ul className="flex gap-11 ">
              {main_paths.map((page, i) => (
                <MyLink page={page} key={i} />
              ))}
            </ul>
            <ul className="ml-auto flex gap-5">
              {side_paths.map((page, i) => (
                <MyLink page={page} key={i} className="last:text-[#909090]" />
              ))}
            </ul>
          </div>
        </div>
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
