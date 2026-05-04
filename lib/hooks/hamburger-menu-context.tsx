"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type HamburgerMenuContextProviderProps = { children: ReactNode };

type ShowMenu = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

export const HamburgerMenuContext = createContext<ShowMenu | null>(null);

function HamburgerMenuContextProvider({
  children,
}: HamburgerMenuContextProviderProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HamburgerMenuContext value={{ showMenu, setShowMenu }}>
      {children}
    </HamburgerMenuContext>
  );
}

export function useHamburgerMenuContext() {
  const context = useContext(HamburgerMenuContext);

  if (!context) {
    throw new Error(
      "useHamburgerMenuContext must be used within a HamburgerMenuContextProvider",
    );
  }

  return context;
}

export default HamburgerMenuContextProvider;
