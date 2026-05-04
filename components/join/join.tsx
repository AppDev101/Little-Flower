import { cn } from "@/lib/utils/cn";

function Join({ classname }: { classname?: string }) {
  return (
    <button
      className={cn(
        "h-15 w-[calc(100%-24px)] cursor-pointer rounded-2xl bg-black/10 px-6 text-nowrap md:mr-7 md:ml-3 md:h-8 md:w-auto md:px-4 lg:h-10 lg:px-6",
        classname,
      )}
    >
      Join Now
    </button>
  );
}

export default Join;
