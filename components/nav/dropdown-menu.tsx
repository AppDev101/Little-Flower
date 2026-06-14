import { cn } from "@/lib/utils/cn";
import { defaultMenuItems } from "./menu-data";
import useNavMenuContext from "@/lib/hooks/use-nav-menu-context";

function DropdownMenu<TData>({
  className,
  data,
}: {
  className?: string;
  data: TData[];
}) {
  const { setShowMenu, setMenuItems } = useNavMenuContext();

  return (
    <ul
      className={cn(
        className,
        "visible absolute -top-3 flex h-svh w-screen flex-col gap-4 bg-[#e2d9c8] px-5 pt-4 pb-5 text-base font-semibold md:absolute md:top-full md:h-auto md:w-auto",
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
