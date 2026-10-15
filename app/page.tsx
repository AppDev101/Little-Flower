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

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio adipisci
        soluta, corporis sed harum quas quisquam maxime optio. Necessitatibus
        aspernatur fugit cum quia modi perferendis quasi ea ut quas dignissimos.
      </div>
    </main>
  );
}
