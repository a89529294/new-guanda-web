import Image from "next/image";
import React from "react";

import logoCN from "src/assets/logo-cn.png";
import work from "src/assets/work.svg";
import phone from "src/assets/phone.svg";
import location from "src/assets/location.svg";

function Footer() {
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-between bg-aswad-black py-3 pl-14 pr-10 text-white">
      <Image src={logoCN} alt="logo" width={160} />
      <nav className="flex gap-8">
        <NavItem label="工作機會" image={work} />
        <NavItem label="聯絡我們" image={phone} />
        <NavItem label="台中市烏日區溪福路一巷110弄105-9號" image={location} />
      </nav>
    </div>
  );
}

function NavItem({ label, image }: { label: string; image: any }) {
  return (
    <div className="flex gap-1.5">
      <Image src={image} alt="decoration" />
      <h3>{label}</h3>
    </div>
  );
}

export default Footer;
