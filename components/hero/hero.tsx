import Image from "next/image";
import Search from "../search/form";
import { Suspense } from "react";
import ListResult from "../search/list-result";
import { Dancing_Script } from "next/font/google";
import { SiBuymeacoffee, SiCoffeescript } from "react-icons/si";
import { BiCoffeeTogo } from "react-icons/bi";
import { PiCake } from "react-icons/pi";
import Link from "next/link";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

function Hero({ searchParams }: { searchParams: Promise<{ search: string }> }) {
  return (
    <section className="flex h-svh flex-col items-center justify-center">
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.10),rgba(0,0,0,0.10)),url('/espresso-surrounded-by-scattered-coffee-beans-dark-surface.png')] bg-cover bg-right bg-no-repeat">
        <div className="mx-auto space-y-5 text-center md:ml-[13.22%]">
          <p
            className={`mx-auto w-[80%] rounded text-center text-4xl leading-relaxed font-bold text-white ${dancingScript.className}`}
          >
            Start your day with a perfect cup of coffee!
          </p>

          <p className="text-2xl font-semibold text-white">
            👋 Good morning! <br />
          </p>

          <Search />

          <Suspense fallback={<p className="mt-2 text-white">Searching...</p>}>
            <ListResult searchParams={searchParams} />
          </Suspense>
        </div>
      </div>

      <div className="flex w-full justify-between px-4.25 py-4 text-[clamp(0.25rem,3.75vw,1rem)] max-[650px]:max-w-112.75 min-[651px]:w-[69.23%]">
        <Link href="#" className="space-y-1">
          <SiCoffeescript className="mx-auto size-7" />
          <span className="text-nowrap">Hot Coffee</span>
        </Link>

        <Link href="#" className="space-y-1">
          <SiBuymeacoffee className="mx-auto size-7" />
          <span className="text-nowrap">Cold Coffee</span>
        </Link>

        <Link href="#" className="space-y-1">
          <BiCoffeeTogo className="mx-auto size-7" />
          <span className="text-nowrap">Cup Coffee</span>
        </Link>

        <Link href="#" className="space-y-1">
          <PiCake className="mx-auto size-7 text-nowrap" />
          <span>Dessert</span>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
