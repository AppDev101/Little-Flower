"use client";

import { Menu, X } from "lucide-react";
import Join from "../join/join";
import Login from "../signin/login";
import NavMenu from "./nav-menu";
import { useHamburgerMenuContext } from "@/lib/hooks/hamburger-menu-context";
import { useNavMenuDataContext } from "@/lib/hooks/nav-menu-data-context";

function HeaderMenu() {
  const { showMenu, setShowMenu } = useHamburgerMenuContext();
  const { menuItems } = useNavMenuDataContext();

  const enabledDropdown = menuItems.some(
    (item) => "subMenu" in item && item.isActive,
  );

  return (
    <>
      {(showMenu || enabledDropdown) && (
        <X
          className="mr-7 ml-auto md:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}
      {!showMenu && !enabledDropdown && (
        <Menu
          className="mr-7 ml-auto md:hidden"
          onClick={() => setShowMenu(true)}
        />
      )}
      <div
        className={`absolute top-full z-1 flex h-[calc(100svh-100%)] w-full flex-col items-center gap-y-2 bg-white font-semibold shadow-[inset_0rem_1rem_1rem_-1rem_#c5c6c7] md:visible md:relative md:top-0 md:h-full md:flex-row md:bg-transparent md:text-[0.8125rem] min-[57.5rem]:text-base lg:text-base ${(!showMenu || enabledDropdown) && "invisible"}`}
      >
        <NavMenu />
        <Login />
        <Join />
      </div>
    </>
  );
}

export default HeaderMenu;
