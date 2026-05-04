import HeaderMenu from "./header-menu";
import HomeNavContextProvider from "@/lib/hooks/home-nav-context";
import HamburgerMenuContextProvider from "@/lib/hooks/hamburger-menu-context";
import NavMenuDataContextProvider from "@/lib/hooks/nav-menu-data-context";
import HomeLink from "./home-link";

async function Nav() {
  return (
    <nav className="relative flex h-23 items-center font-semibold shadow-[0_0.125rem_0.75rem_#c5c6c7] lg:text-lg">
      <NavMenuDataContextProvider>
        <HomeNavContextProvider>
          <HamburgerMenuContextProvider>
            <HomeLink />
            <HeaderMenu />
          </HamburgerMenuContextProvider>
        </HomeNavContextProvider>
      </NavMenuDataContextProvider>
    </nav>
  );
}

export default Nav;
