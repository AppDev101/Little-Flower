import CarouselSpecials from "../carousel";
import { specialDessertData } from "../data";

function SpecialDessert() {
  return (
    <>
      <h1 className="mx-auto w-fit text-2xl leading-22 font-bold">
        OUR SPECIAL DESSERT
      </h1>

      <CarouselSpecials specialData={specialDessertData} />
    </>
  );
}

export default SpecialDessert;
