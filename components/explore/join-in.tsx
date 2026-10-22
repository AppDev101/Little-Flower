import { Mail } from "lucide-react";

function JoinIn() {
  return (
    <div className="flex h-60 flex-col items-center justify-center bg-[#E2D9C8] bg-[url(/coffee-beans-left.png),url(/coffee-beans-right.png)] bg-size-[contain,contain] bg-position-[left,right] bg-no-repeat">
      <h1 className="text-2xl font-semibold">Join in and get 15% off!</h1>
      <p className="text-sm">
        Subscribe to our newsletter and get 15% off discount code.
      </p>

      <div className="my-3 flex">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="peer rounded-full border border-gray-300 bg-white py-1 pr-4 pl-10 not-placeholder-shown:pl-4 placeholder:text-gray-600 focus:border-gray-700/30 focus:ring-1 focus:ring-gray-700/30 focus:outline-none"
          />
          <Mail className="absolute top-1.75 left-4 size-5 text-gray-500 peer-not-placeholder-shown:hidden" />
        </div>
        <button className="rounded-full bg-gray-800 px-4 py-1 text-white hover:bg-gray-700/90">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default JoinIn;
