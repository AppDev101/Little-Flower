"use client";

import { defaultMenuItems, MenuItems } from "@/components/nav/menu-data";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type NavMenuDataContextProviderProps = {
  children: ReactNode;
};

type NavMenuItems = {
  menuItems: MenuItems[];
  setMenuItems: Dispatch<SetStateAction<MenuItems[]>>;
};

export const NavMenuDataContext = createContext<NavMenuItems | null>(null);

function NavMenuDataContextProvider({
  children,
}: NavMenuDataContextProviderProps) {
  const [menuItems, setMenuItems] = useState(structuredClone(defaultMenuItems));

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = () => {
      setMenuItems(structuredClone(defaultMenuItems));
    };

    media.addEventListener("change", handleMediaChange);

    return () => {
      media.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <NavMenuDataContext value={{ menuItems, setMenuItems }}>
      {children}
    </NavMenuDataContext>
  );
}

export function useNavMenuDataContext() {
  const context = useContext(NavMenuDataContext);

  if (!context) {
    throw new Error(
      "useNavMenuDataContext must be used within a NavMenuDataContextProvider",
    );
  }

  return context;
}

export default NavMenuDataContextProvider;
