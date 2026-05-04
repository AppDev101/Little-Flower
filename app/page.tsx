import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Image
        src="/coffee_shop.png"
        alt="coffee_shop"
        width={1402}
        height={1122}
        loading="eager"
        className="h-full w-full object-cover lg:w-[85%]"
      />
    </main>
  );
}
