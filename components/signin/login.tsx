import { cn } from "@/lib/utils/cn";

function Login({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "bg-foreground text-background border-background/30 h-15 w-[calc(100%-24px)] cursor-pointer rounded-2xl border px-6 md:mx-0 md:h-8 md:w-auto md:px-4 lg:h-10 lg:px-6",
        className,
      )}
    >
      Login
    </button>
  );
}

export default Login;
