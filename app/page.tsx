import Hero from "@/components/hero/hero";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  return (
    <main className="absolute">
      <Hero searchParams={searchParams} />

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio adipisci
        soluta, corporis sed harum quas quisquam maxime optio. Necessitatibus
        aspernatur fugit cum quia modi perferendis quasi ea ut quas dignissimos.
      </div>
    </main>
  );
}
