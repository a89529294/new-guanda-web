import Image from "next/image";
import React, { ReactNode } from "react";

import logo from "src/assets/logo_small.png";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="flex bg-[#181A1D] ">
        <div className="pl-14 w-56 py-3">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex-1 relative pr-10 bg-white/30 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)]">
          <div className="absolute inset-0 left-[1px] pr-10 bg-[#101010] [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)]"></div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
