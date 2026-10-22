import Image from "next/image";
import { SpecialData } from "./data";

function Card({ item }: { item: SpecialData }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-[#E2D9C8]/20 p-4 shadow-md min-[32rem]:p-3.5">
      <Image
        src={item.image}
        alt={item.name}
        width={300}
        height={300}
        className="aspect-square w-full rounded-lg border border-gray-200 object-cover"
      />
      <h1 className="mt-2 text-xl font-bold">{item.name}</h1>

      <p className="mt-0.5 line-clamp-3 h-12">{item.description}</p>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-semibold text-gray-700">
          Php {item.price.toFixed(2)}
        </span>
        <button className="rounded-xl bg-black/80 px-4 py-1.5 text-nowrap text-white">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Card;
