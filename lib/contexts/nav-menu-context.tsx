"use client";
import { defaultMenuItems, MenuItems } from "@/components/nav/menu-data";
import {
  createContext,
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";

type NavMenuContextProps = {
  children: ReactNode;
};

type NavMenuContextData = {
  menuItems: MenuItems[];
  setMenuItems: Dispatch<SetStateAction<MenuItems[]>>;

  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;

  homeRef: RefObject<HTMLAnchorElement | null>;
};

export const NavMenuContext = createContext<NavMenuContextData | null>(null);

function NavMenuContextProvider({ children }: NavMenuContextProps) {
  const [menuItems, setMenuItems] = useState(structuredClone(defaultMenuItems));
  const [showMenu, setShowMenu] = useState(false);
  const homeRef = useRef(null);

  return (
    <NavMenuContext
      value={{ menuItems, setMenuItems, showMenu, setShowMenu, homeRef }}
    >
      {children}
    </NavMenuContext>
  );
}

export default NavMenuContextProvider;
