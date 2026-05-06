import { useHamburgerMenuContext } from "@/lib/hooks/hamburger-menu-context";
import { useNavMenuDataContext } from "@/lib/hooks/nav-menu-data-context";
import { cn } from "@/lib/utils/cn";
import { defaultMenuItems } from "./menu-data";

function DropdownMenu<TData>({
  className,
  data,
}: {
  className?: string;
  data: TData[];
}) {
  const { setShowMenu } = useHamburgerMenuContext();
  const { setMenuItems } = useNavMenuDataContext();

  return (
    <ul
      className={cn(
        className,
        "visible absolute -top-3 flex w-screen flex-col gap-4 bg-white px-5 pt-4 pb-5 text-base font-semibold shadow-[0px_0px_15px_7px_rgba(0,0,0,0.05),inset_0rem_1rem_1rem_-1rem_#c5c6c7] md:absolute md:top-full md:h-auto md:w-auto",
      )}
    >
      {data.map((item: TData, index: number) => {
        return (
          <li
            key={index}
            onClick={() => {
              setMenuItems(structuredClone(defaultMenuItems));
              setShowMenu(false);
            }}
            className="relative cursor-pointer pl-2.25 before:absolute before:left-0 before:h-full before:bg-blue-500 hover:text-blue-500 hover:before:w-1"
          >
            {item as string}
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownMenu;
