import { ChevronsRight } from "lucide-react";

function Products() {
  return (
    <div className="flex h-60 items-center bg-[#E2D9C8] bg-[url('/background-latte.png')] bg-size-[contain,contain] bg-right bg-no-repeat min-[425px]:bg-[url('/coffee-beans.png'),url('/background-latte.png')] min-[425px]:bg-position-[left,right]">
      <div className="ml-5 flex w-[calc(100%-421px)] min-w-67.5 flex-col items-center gap-3 rounded-xl bg-[#E2D9C8B3] py-5 min-[425px]:mx-auto min-[691px]:ml-46.75">
        <h1 className="text-2xl font-semibold text-nowrap text-black">
          {/* text-lg min-[691px]:text-2xl */}
          Check Out Our Best
          <br />
          Coffee Beans
        </h1>

        <button className="flex rounded-full bg-black py-1.5 pr-3.5 pl-5.5 text-nowrap text-white">
          {/* text-xs min-[691px]:text-sm"> */}
          Explore Our Products
          <ChevronsRight className="ml-2 size-4.5" />
        </button>
      </div>
    </div>
  );
}

export default Products;
