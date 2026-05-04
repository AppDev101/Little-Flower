import DropdownMenu from "./dropdown-menu";

function Dropdown<TData>({
  name,
  data,
  isActive,
  onClick,
}: {
  name: string;
  data: TData[];
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <button
        className="h-full cursor-pointer p-3 hover:text-blue-500"
        onClick={onClick}
      >
        {name}
      </button>

      {isActive && <DropdownMenu data={data} />}
    </>
  );
}

export default Dropdown;
