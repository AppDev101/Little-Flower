"use client";

import { createContext, useRef, RefObject, ReactNode, useContext } from "react";

type HomeNavContextProviderProps = { children: ReactNode };

type HomeRef = RefObject<HTMLAnchorElement | null>;

export const HomeNavContext = createContext<HomeRef | null>(null);

function HomeNavContextProvider({ children }: HomeNavContextProviderProps) {
  const homeRef = useRef<HTMLAnchorElement | null>(null);

  return <HomeNavContext value={homeRef}>{children}</HomeNavContext>;
}

export function useHomeNavContext() {
  const context = useContext(HomeNavContext);

  if (!context) {
    throw new Error(
      "useHomeNavContext must be used within a HomeNavContextProvider",
    );
  }

  return context;
}

export default HomeNavContextProvider;
