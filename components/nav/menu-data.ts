export type DropdownMenuData = {
  name: string;
  subMenu: string[];
  isActive: boolean;
};

export type NavLink = {
  name: string;
  href: string;
  isActive: boolean;
};

export type MenuItems = DropdownMenuData | NavLink;

export const defaultMenuItems: MenuItems[] = [
  {
    name: "Menu",
    subMenu: ["SubMenu1", "SubMenu2", "SubMenu3"],
    isActive: false,
  },
  // {
  //   name: "Menu1",
  //   subMenu: ["SubMenu11", "SubMenu12", "SubMenu13"],
  //   isActive: false,
  // },
  { name: "Merch", href: "/merch", isActive: false },
  // { name: "Store", href: "/store", isActive: false },
  { name: "About Us", href: "/about", isActive: false },
  { name: "Location", href: "/location", isActive: false },
  { name: "Contact Us", href: "/contact", isActive: false },
];
