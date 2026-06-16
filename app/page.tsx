import Hero from "@/components/hero/hero";
import SpecialCoffee from "@/components/special/special-coffee";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  return (
    // <main className="relative -top-23 w-full lg:w-[85%]">
    <main className="relative -top-23 w-full min-[870px]:w-217.5 lg:w-[85%]">
      <Hero searchParams={searchParams} />

      <SpecialCoffee />

      <div className="absolute">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio adipisci
        soluta, corporis sed harum quas quisquam maxime optio. Necessitatibus
        aspernatur fugit cum quia modi perferendis quasi ea ut quas dignissimos.
      </div>
    </main>
  );
}
