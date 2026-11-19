import Image from "next/image";
import { SpecialData } from "./data";

function Card({ item }: { item: SpecialData }) {
  return (
    <div className="@container rounded-lg border border-gray-300 bg-[#E2D9C8]/20 p-[clamp(14px,6cqi,22px)] shadow-md">
      <Image
        src={item.image}
        alt={item.name}
        width={300}
        height={300}
        className="aspect-square w-full rounded-lg border border-gray-200 object-cover"
      />
      <h1 className="mt-4 text-xl font-bold">{item.name}</h1>

      <p className="mt-1 line-clamp-3 h-12 text-[clamp(12px,8cqi,16px)]">
        {item.description}
      </p>

      <div className="mt-4 flex flex-col items-center justify-between gap-y-2 @min-[212px]:flex-row">
        <span className="font-semibold text-nowrap text-gray-700">
          Php {item.price.toFixed(2)}
        </span>
        <button className="w-full rounded-xl bg-black/80 px-4 py-1.5 text-nowrap text-white @min-[212px]:w-auto">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Card;
