import Navbar from "../nav/navbar";
import NavMenuContextProvider from "@/lib/contexts/nav-menu-context";

function Header() {
  return (
    <NavMenuContextProvider>
      <Navbar />
    </NavMenuContextProvider>
  );
}

export default Header;
