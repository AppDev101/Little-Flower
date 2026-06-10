"use client";

import useNavMenuContext from "@/lib/hooks/use-nav-menu-context";
import SiteIcon from "./icon";
import Link from "next/link";

function HomeLink() {
  const { homeRef, setShowMenu } = useNavMenuContext();

  return (
    <Link
      ref={homeRef}
      href="/"
      className="ml-7 h-14 w-45 shrink-0"
      onClick={() => {
        if (window.matchMedia("(max-width: 767px)").matches) setShowMenu(false);
      }}
    >
      <SiteIcon />
    </Link>
  );
}

export default HomeLink;
