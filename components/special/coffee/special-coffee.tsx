import CarouselSpecials from "../carousel";
import { specialCoffeeData } from "../data";

function SpecialCoffee() {
  return (
    <>
      <h1 className="mx-auto w-fit text-2xl leading-22 font-bold">
        OUR SPECIAL COFFEE
      </h1>

      <CarouselSpecials specialData={specialCoffeeData} />
    </>
  );
}

export default SpecialCoffee;
