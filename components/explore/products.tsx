import { ChevronsRight } from "lucide-react";

function Products() {
  return (
    <div className="flex h-60 items-center justify-center bg-[#E2D9C8] bg-[url('/coffee-beans.png'),url('/background-latte.png')] bg-size-[contain,contain] bg-position-[left,right] bg-no-repeat">
      <div className="flex w-[43%] flex-col items-start gap-3">
        <h1 className="text-2xl font-semibold">
          Check Out Our Best
          <br />
          Coffee Beans
        </h1>
        <button className="flex rounded-full bg-black py-2 pr-4 pl-6 text-white">
          Explore Our Products
          <ChevronsRight className="ml-2 size-5.5" />
        </button>
      </div>
    </div>
  );
}

export default Products;
