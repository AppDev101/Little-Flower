"use client";

import { useHomeNavContext } from "@/lib/hooks/home-nav-context";
import SiteIcon from "./icon";
import { useHamburgerMenuContext } from "@/lib/hooks/hamburger-menu-context";
import Link from "next/link";

function HomeLink() {
  const homeRef = useHomeNavContext();
  const { setShowMenu } = useHamburgerMenuContext();

  return (
    <Link
      ref={homeRef}
      href="/"
      className="ml-7 size-14 shrink-0"
      onClick={() => {
        if (window.matchMedia("(max-width: 767px)").matches) setShowMenu(false);
      }}
    >
      <SiteIcon />
    </Link>
  );
}

export default HomeLink;
