"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import CustomerCard from "./customer-card";
import customersData from "./customers/data";

function Join() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = window.setInterval(() => {
      api.scrollNext();
      setCurrent(api.selectedScrollSnap());
    }, 5000);
    return () => window.clearInterval(interval);
  }, [api]);

  const scrollTo = (index: number) => {
    setCurrent(index);
    api?.scrollTo(index);
  };

  return (
    <div className="px-6 py-8.5">
      <h1 className="flex justify-center text-2xl font-bold">Come and Join</h1>
      <h2 className="flex justify-center text-xl font-semibold">
        OUR HAPPY CUSTOMERS
      </h2>

      <Carousel
        opts={{ align: "center", loop: true }}
        setApi={setApi}
        className="mt-5 min-w-81.75 px-10"
      >
        <CarouselContent>
          {customersData.map((customer, index) => (
            <CarouselItem
              key={customer.customerName}
              className="basis-full min-[1060px]:basis-1/3"
            >
              <CustomerCard
                customerName={customer.customerName}
                customerJob={customer.customerJob}
                customerImage={customer.customerImage}
                customerRating={customer.customerRating}
                customerReview={customer.customerReview}
                customerSelected={current == index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`text-gray-300 ${current === index ? "text-gray-700" : ""}`}
          >
            ●
          </button>
        ))}
      </div>
    </div>
  );
}

export default Join;
