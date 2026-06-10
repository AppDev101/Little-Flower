import Image from "next/image";
import Search from "../search/form";
import { Suspense } from "react";
import ListResult from "../search/list-result";
import { Dancing_Script } from "next/font/google";
import { SiBuymeacoffee, SiCoffeescript } from "react-icons/si";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

function Hero({ searchParams }: { searchParams: Promise<{ search: string }> }) {
  return (
    <section className="relative flex h-svh w-full flex-col items-center justify-center">
      <Image
        src="/espresso-surrounded-by-scattered-coffee-beans-dark-surface 1.png"
        alt="coffee_shop"
        width={1402}
        height={1122}
        loading="eager"
        className="relative right-0 h-full w-full object-cover lg:w-[85%]"
      />

      <div className="absolute mx-auto mt-23 space-y-9.75 text-center md:left-[13.22%]">
        <p
          className={`mx-auto w-[80%] rounded bg-black/10 text-center text-4xl leading-relaxed font-bold text-white ${dancingScript.className}`}
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

      <div className="flex">
        <SiCoffeescript />
        <SiBuymeacoffee />
      </div>
    </section>
  );
}

export default Hero;
