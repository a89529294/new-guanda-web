import Image from "next/image";
import React from "react";

import logoCN from "src/assets/logo-cn.png";
import logo from "src/assets/logo-only.svg";
import work from "src/assets/work.svg";
import phone from "src/assets/phone.svg";
import location from "src/assets/location.svg";
import cx from "classix";

function Footer() {
  return (
    <div className="absolute bottom-0 flex w-full items-center  bg-aswad-black py-3 pl-14 pr-10 text-white sm:hidden">
      <Image src={logoCN} alt="logo" width={160} className="" />
      <Image src={logo} alt="logo" className="hidden" />
      <nav className="ml-auto flex gap-14">
        <NavItem label="工作機會" image={work} link="https://www.104.com.tw/company/1a2x6bm3kg" />
        <NavItem label="聯絡我們" image={phone} />
        <NavItem label="台中市烏日區溪福路一巷110弄105-9號" image={location} />
      </nav>
    </div>
  );
}

function NavItem({ label, image, link }: { label: string; image: any; link?: string }) {
  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className="flex gap-1.5 whitespace-nowrap">
      <Image src={image} alt="decoration" className="h-full w-auto" />
      {label}
    </a>
  ) : (
    <div className="flex gap-1.5 ">
      <Image src={image} alt="decoration" className="h-full w-auto" />
      <h3 className="whitespace-nowrap">{label}</h3>
    </div>
  );
}

export default Footer;
