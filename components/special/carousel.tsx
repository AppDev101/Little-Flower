import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Card from "./card";
import { SpecialData } from "./data";

function CarouselSpecials({ specialData }: { specialData: SpecialData[] }) {
  const lastIndex = specialData.length - 1;

  return (
    <Carousel opts={{ align: "start" }} className="px-4 min-[375px]:px-10">
      <CarouselContent className="p-1 md:-ml-6">
        {specialData.map((item, idx) => (
          <CarouselItem
            key={item.id}
            className={`${idx > 0 && (idx < lastIndex ? "translate-x-1" : "-translate-x-1")} container min-[32rem]:basis-1/2 min-[32rem]:translate-none md:basis-1/3 md:pl-6 min-[122.875rem]:basis-1/4`}
          >
            <Card item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute max-[62rem]:left-5" />
      <CarouselNext className="absolute max-[62rem]:right-5" />
    </Carousel>
  );
}

export default CarouselSpecials;
