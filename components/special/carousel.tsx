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
  return (
    <Carousel opts={{ align: "start" }} className="px-3 min-[32rem]:px-0">
      <CarouselContent>
        {specialData.map((item) => (
          <CarouselItem
            key={item.id}
            className="min-[32rem]:basis-1/2 md:basis-1/3 min-[122.875rem]:basis-1/4"
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
