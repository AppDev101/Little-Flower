import Explore from "@/components/explore/explore";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Special from "@/components/special/special";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  return (
    // <main className="relative -top-23 w-full lg:w-[85%]">
    <main className="w-full min-[870px]:w-217.5 lg:w-[85%]">
      <Hero searchParams={searchParams} />

      <Special />

      <Explore />

      <Footer />
    </main>
  );
}
