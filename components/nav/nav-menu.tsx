"use client";

import { cn } from "@/lib/utils/cn";
import { useEffect, useEffectEvent, useRef } from "react";
import { DropdownMenuData, NavLink } from "./menu-data";
import { usePathname } from "next/navigation";
import Dropdown from "./dropdown";
import Link from "next/link";
import { useHomeNavContext } from "@/lib/hooks/home-nav-context";
import { useNavMenuDataContext } from "@/lib/hooks/nav-menu-data-context";
import { useHamburgerMenuContext } from "@/lib/hooks/hamburger-menu-context";

// This component is responsible for rendering a single menu item in the navigation.
// It supports both navigation links and dropdown menus.
function MenuItem<TData extends NavLink | DropdownMenuData>({
  data,
  menuRef,
  onClick,
}: {
  data: TData;
  menuRef?: (el: HTMLLIElement | null) => void;
  onClick?: () => void;
}) {
  const { href } = data as NavLink;
  const { subMenu } = data as DropdownMenuData;
  const { name, isActive } = data;

  switch ("href" in data) {
    case true: {
      return (
        <li
          ref={menuRef}
          onClick={onClick}
          className={`relative h-full cursor-pointer text-nowrap after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full ${isActive && "md:after:bg-blue-500"} hover:text-blue-500`}
        >
          <Link href={href} className="flex h-full items-center p-3">
            {name}
          </Link>
        </li>
      );
    }

    default: {
      return (
        <li
          ref={(el) => menuRef && menuRef(el)}
          className={`relative h-full w-full text-center text-nowrap after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full md:order-0 md:w-auto ${isActive && "order-first md:after:bg-blue-500"}`}
        >
          <Dropdown
            name={name}
            data={subMenu}
            isActive={isActive}
            onClick={onClick}
          />
        </li>
      );
    }
  }
}

function NavMenu({ className }: { className?: string }) {
  const dropdownMenuRef = useRef<Record<string, HTMLLIElement | null>>({});
  const navMenuRef = useRef<Record<string, HTMLLIElement | null>>({});
  const pathname = usePathname();
  const homeNavRef = useHomeNavContext();
  const { setShowMenu } = useHamburgerMenuContext();
  const { menuItems, setMenuItems } = useNavMenuDataContext();

  function toggleDropdown({ name, isActive }: DropdownMenuData) {
    const tempMenuItems = menuItems.map((menuItem) => {
      if (menuItem.name === name) {
        return { ...menuItem, isActive: !isActive };
      }

      return { ...menuItem, isActive: false };
    });

    setMenuItems(tempMenuItems);
  }

  function setActiveMenu({ name }: NavLink) {
    const tempMenuItems = menuItems.map((menuItem) => {
      return { ...menuItem, isActive: menuItem.name === name };
    });

    setMenuItems(tempMenuItems);
  }

  const onManualPageNavigation = useEffectEvent(() => {
    const tempMenuItems = menuItems.map((item) => {
      if ("href" in item) {
        return { ...item, isActive: item.href === pathname };
      }

      return { ...item, isActive: false };
    });

    setMenuItems(tempMenuItems);
  });

  const clickedOutsideDropdownMenu = useEffectEvent((event: MouseEvent) => {
    if (dropdownMenuRef.current) {
      const isDropdownMenuClicked = Object.values(dropdownMenuRef.current).some(
        (value) => value?.contains(event.target as HTMLLIElement),
      );

      if (isDropdownMenuClicked) return;

      const tempMenuItems = menuItems.map((item) => {
        if ("subMenu" in item) {
          // Dropdown disabled when clicked outside the dropdown menu
          return { ...item, isActive: false };
        }

        return item;
      });

      setMenuItems(tempMenuItems);
    }
  });

  const clickedOutsideNavMenuItems = useEffectEvent((event: MouseEvent) => {
    if (navMenuRef.current) {
      const isDropdwonMenuClicked = Object.values(dropdownMenuRef.current).some(
        (value) => value?.contains(event.target as HTMLLIElement),
      );

      const isNavMenuClicked = Object.values(navMenuRef.current).some((value) =>
        value?.contains(event.target as HTMLLIElement),
      );

      const isHomeNavClicked = homeNavRef.current?.contains(
        event.target as HTMLLinkElement,
      );

      if (isDropdwonMenuClicked || isNavMenuClicked) return;

      const tempMenuItems = menuItems.map((item) => {
        // if (pathname === "/") return { ...item, isActive: false };

        if (isHomeNavClicked) {
          return { ...item, isActive: false };
        } else if ("href" in item) {
          // Dropdown disabled when clicked outside the dropdown menu
          return { ...item, isActive: item.href === pathname };
        }

        return item;
      });

      setMenuItems(tempMenuItems);
    }
  });

  // Disables the dropdown when the dropdown menu is not clicked
  // sets the active nav menu when none of the nav menu is clicked
  useEffect(() => {
    document.addEventListener("mousedown", clickedOutsideDropdownMenu);
    document.addEventListener("mousedown", clickedOutsideNavMenuItems);

    return () => {
      document.removeEventListener("mousedown", clickedOutsideDropdownMenu);
      document.removeEventListener("mousedown", clickedOutsideNavMenuItems);
    };
  }, []);

  // Sets the active menu when url with pathname is inputted in the browser
  useEffect(() => {
    onManualPageNavigation();
  }, [pathname]);

  return (
    <ul
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 pt-3 pb-3 text-black/80 md:mx-auto md:h-full md:flex-row md:pt-0 md:pb-0 lg:gap-5 xl:gap-10",
        className,
      )}
    >
      {menuItems.map((item) => {
        if ("href" in item) {
          return (
            <MenuItem
              key={item.name}
              data={item}
              menuRef={(el) => {
                navMenuRef.current[item.name] = el;
              }}
              onClick={() => {
                setActiveMenu(item);
                if (window.matchMedia("(max-width: 767px)").matches) {
                  setShowMenu(false);
                }
              }}
            />
          );
        }

        return (
          <MenuItem
            key={item.name}
            data={item}
            menuRef={(el) => {
              dropdownMenuRef.current[item.name] = el;
            }}
            onClick={() => {
              toggleDropdown(item);
            }}
          />
        );
      })}
    </ul>
  );
}

export default NavMenu;
