import { useContext } from "react";
import { NavMenuContext } from "../contexts/nav-menu-context";

function useNavMenuContext() {
  const context = useContext(NavMenuContext);

  if (!context) {
    throw new Error(
      "useNavMenuContext must be used within a NavMenuContextProvider",
    );
  }

  return context;
}

export default useNavMenuContext;
