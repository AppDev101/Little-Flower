"use client";
import { Open_Sans } from "next/font/google";
import HomeLink from "./home-link";
import HeaderMenu from "./header-menu";
import useNavMenuContext from "@/lib/hooks/use-nav-menu-context";
import { useEffect, useState } from "react";

const openSans = Open_Sans({ subsets: ["latin"], weight: "600" });

function Navbar() {
  const { showMenu } = useNavMenuContext();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > lastScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollPos]);

  return (
    <nav
      className={`fixed top-0 z-10 flex h-12.5 w-full items-center bg-black/35 lg:text-lg dark:bg-black/20 ${openSans.className} ${showMenu && "max-md:bg-[#e2d9c8]!"} ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out`}
    >
      <HomeLink />
      <HeaderMenu />
    </nav>
  );
}

export default Navbar;
