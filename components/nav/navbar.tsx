"use client";
import { Open_Sans } from "next/font/google";
import HomeLink from "./home-link";
import HeaderMenu from "./header-menu";
import useNavMenuContext from "@/lib/hooks/use-nav-menu-context";

const openSans = Open_Sans({ subsets: ["latin"], weight: "600" });

function Navbar() {
  const { showMenu } = useNavMenuContext();

  return (
    <nav
      className={`sticky top-0 z-10 flex h-23 w-full items-center bg-white/5 lg:text-lg dark:bg-black/20 ${openSans.className} ${showMenu && "max-md:bg-[#e2d9c8]!"}`}
    >
      <HomeLink />
      <HeaderMenu />
    </nav>
  );
}

export default Navbar;
