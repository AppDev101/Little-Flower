import Image from "next/image";

function HeroImage() {
  return (
    <div className="h-svh w-full bg-linear-[140deg,#242d7d_10%,#008dd8_70%,#7cbaf7_90%]">
      <Image
        src="/hero-image.png"
        alt="Cappuccino"
        width={1920}
        height={1000}
      />
    </div>
  );
}

export default HeroImage;
