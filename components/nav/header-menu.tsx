"use client";

import { IoCloseSharp } from "react-icons/io5";
import Join from "../join/join";
import Login from "../signin/login";
import NavMenu from "./nav-menu";
import { TiThMenu } from "react-icons/ti";
import { cn } from "@/lib/utils/cn";
import useNavMenuContext from "@/lib/hooks/use-nav-menu-context";

function HeaderMenu() {
  const { showMenu, setShowMenu, menuItems } = useNavMenuContext();

  const enabledDropdown = menuItems.some(
    (item) => "subMenu" in item && item.isActive,
  );

  return (
    <>
      {(showMenu || enabledDropdown) && (
        <IoCloseSharp
          className="mr-7 ml-auto size-6 text-[#544339] md:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}
      {!showMenu && !enabledDropdown && (
        <TiThMenu
          className="mr-7 ml-auto size-6 text-[#f5e9d3] md:hidden"
          onClick={() => setShowMenu(true)}
        />
      )}
      <div
        className={`absolute top-full z-1 flex h-[calc(100svh-100%)] w-full flex-col items-center gap-y-2 font-medium text-black/80 max-md:bg-[#e2d9c8] md:visible md:relative md:top-0 md:h-full md:flex-row md:bg-transparent md:text-xs md:text-white min-[57.5rem]:text-base lg:text-base ${(!showMenu || enabledDropdown) && "invisible"}`}
      >
        <NavMenu />
        <Login />
        <Join />
      </div>
    </>
  );
}

export default HeaderMenu;
