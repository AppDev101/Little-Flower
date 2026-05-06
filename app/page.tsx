import Search from "@/components/search/form";
import ListResult from "@/components/search/list-result";
import Image from "next/image";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Image
        src="/coffee_shop.png"
        alt="coffee_shop"
        width={1402}
        height={1122}
        loading="eager"
        className="h-full w-full object-cover lg:w-[85%]"
      />
      <div className="absolute space-y-10 text-center">
        <p className="mx-auto w-[80%] rounded bg-black/10 text-center text-4xl leading-relaxed font-bold text-white">
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
    </main>
  );
}
