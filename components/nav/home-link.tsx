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
      className="ml-7 h-9 w-32 shrink-0"
      onClick={() => {
        if (window.matchMedia("(max-width: 767px)").matches) setShowMenu(false);
      }}
    >
      <SiteIcon textColor="white" />
    </Link>
  );
}

export default HomeLink;
