import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import cx from "classix";
import { useRouter } from "next/router";

import logo from "src/assets/logo_small.png";
import work from "src/assets/work.svg";
import location from "src/assets/location.svg";
import { invalid_routes, LinkProp, main_routes, side_routes } from "src/routes";
import classix from "classix";

function Layout({ children, className }: { children: ReactNode; className?: string }) {
  const router = useRouter();
  const [showMenu, toggleMenu] = useState(false);

  return (
    <div className={cx("relative pt-[var(--nav-height)]", className)}>
      <nav className="fixed top-0 z-10 flex h-nav w-full bg-aswad-black">
        <div className="flex w-56 items-center bg-aswad-black pl-14 sm:w-48 sm:pl-7">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer sm:w-24"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="flex-1 bg-aswad-black">
          <div className="relative isolate h-full bg-white/30 pr-10 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)] sm:flex sm:items-center sm:justify-end sm:pr-7">
            <div className="absolute inset-0 left-[1px] flex bg-[#101010] pr-10 pl-32 pt-8 [clip-path:polygon(95px_0,100%_0,100%_100%,0_100%)]">
              <ul className="flex gap-11 xl:gap-6 sm:hidden">
                {main_routes.map((route, i) => (
                  <MyLink route={route} key={i} />
                ))}
              </ul>
              <ul className="ml-auto flex gap-5 xl:gap-3 lg:hidden">
                {side_routes.map((route, i) => (
                  <MyLink route={route} key={i} className="last:text-[#909090]" />
                ))}
                {invalid_routes.map((route, i) => (
                  <li className="text-gray-500" key={i}>
                    {route.label}
                  </li>
                ))}
              </ul>
            </div>
            {/* mobile burger */}
            {showMenu ? (
              <div
                className="relative z-10 h-8 w-8 rotate-45 before:absolute before:block before:h-1/2 before:w-full before:translate-y-[1px] before:border-b-2 after:absolute after:block after:h-full after:w-1/2 after:translate-x-[1px] after:border-r-2"
                onClick={() => toggleMenu(false)}
              />
            ) : (
              <div
                className="z-10 hidden h-5 w-6 border-y-2 before:block before:h-1/2 before:translate-y-[1px] before:border-b-2 sm:block"
                onClick={() => toggleMenu(true)}
              />
            )}
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={classix(
            "absolute top-full -z-10 hidden h-screen-minus-nav w-full flex-col bg-black/[0.93] px-6 py-6 transition-transform duration-200 sm:flex",
            showMenu ? "translate-y-0" : "-translate-y-full"
          )}>
          <nav className="text-center">
            <ul className="flex flex-col divide-y divide-shadow-mountain text-xl text-white [&>li]:py-4">
              {main_routes.map((route, i) => (
                <li key={i}>
                  <Link href={route.path}>{route.label}</Link>
                </li>
              ))}
              {side_routes.map((route, i) => (
                <li key={i}>
                  <Link href={route.path}>{route.label}</Link>
                </li>
              ))}
              {invalid_routes.map((route, i) => (
                <li key={i} className=" text-tin">
                  {route.label}
                </li>
              ))}
            </ul>
          </nav>
          <footer className="mt-auto grid grid-cols-[auto_1fr] gap-x-2.5 gap-y-5 text-white">
            <Image src={work} alt="bag" className="self-center" />
            <span>工作機會</span>
            <Image src={location} alt="location" className="place-self-center" />
            <span>台中市烏日區溪福路一巷110弄105-9號</span>
          </footer>
        </div>
      </nav>
      {children}
    </div>
  );
}

function MyLink({ className, route }: { className?: string; route: LinkProp }) {
  const router = useRouter();

  return (
    <li className={cx("flex flex-col text-white", className)}>
      <Link href={route.path} className="peer">
        {route.label}
      </Link>
      <span
        className={cx(
          "mt-auto bg-[#2AFD58] peer-hover:h-[3px]",
          route.path === router.pathname && "h-[3px]"
        )}
      />
    </li>
  );
}

export default Layout;
