import { cn } from "@/lib/utils/cn";

function Join({ classname }: { classname?: string }) {
  return (
    <button
      className={cn(
        "bg-background/80 border-foreground/30 h-15 w-[calc(100%-24px)] cursor-pointer rounded-2xl border px-6 text-nowrap text-black md:mr-7 md:ml-3 md:h-8 md:w-auto md:px-4 lg:h-10 lg:px-6 dark:text-white",
        classname,
      )}
    >
      Join Now
    </button>
  );
}

export default Join;
