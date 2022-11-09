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
    <div className="absolute bottom-0 flex w-full items-center justify-between bg-aswad-black py-3 pl-14 pr-10 text-white sm:-ml-10 sm:justify-start sm:gap-3 sm:border-t sm:border-white/50 sm:pl-10 sm:pr-0">
      <Image src={logoCN} alt="logo" width={160} className="sm:hidden" />
      <Image src={logo} alt="logo" className="hidden sm:block" />
      <nav className="flex gap-8">
        <NavItem label="工作機會" image={work} hideOnMobile />
        <NavItem label="聯絡我們" image={phone} hideOnMobile />
        <NavItem label="台中市烏日區溪福路一巷110弄105-9號" image={location} />
      </nav>
    </div>
  );
}

function NavItem({
  label,
  image,
  hideOnMobile,
}: {
  label: string;
  image: any;
  hideOnMobile?: boolean;
}) {
  return (
    <div className={cx("flex gap-1.5 whitespace-nowrap sm:text-sm", hideOnMobile && "sm:hidden")}>
      <Image src={image} alt="decoration" className="h-full w-auto" />
      <h3>{label}</h3>
    </div>
  );
}

export default Footer;
