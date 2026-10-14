import { cn } from "@/lib/utils/cn";

function Login({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        "bg-foreground text-background border-background/30 h-15 w-[calc(100%-24px)] cursor-pointer rounded-xl border px-6 md:mx-0 md:h-5 md:w-auto md:px-4 lg:h-8 lg:px-6",
        className,
      )}
    >
      Login
    </button>
  );
}

export default Login;
