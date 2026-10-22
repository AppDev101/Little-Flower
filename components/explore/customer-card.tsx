import Image from "next/image";

type customerCardProps = {
  customerName: string;
  customerJob: string;
  customerImage: string;
  customerRating: number;
  customerReview: string;
  customerSelected: boolean;
};

function CustomerCard({
  customerName,
  customerJob,
  customerImage,
  customerRating,
  customerReview,
  customerSelected,
}: customerCardProps) {
  return (
    <div
      className={`${!customerSelected ? "scale-85 transform transition duration-600 ease-in" : "scale-96 transform ring-1 ring-gray-300 transition duration-600 ease-in"} relative mx-auto flex h-full max-w-90 min-w-61.75 flex-col rounded-xl bg-[#E2D9C8]/20 p-3 shadow-md`}
    >
      <div className="@container mb-2 flex justify-between">
        <div className="flex gap-2">
          <Image
            src={customerImage}
            alt={customerName}
            width={40}
            height={40}
            className="aspect-square size-[clamp(2.5rem,18cqi,5rem)] rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-[clamp(0.9375rem,2cqi,1.25rem)] font-semibold">
              {customerName}
            </h3>

            <p className="text-[clamp(0.75rem,4cqi,0.94rem)]">{customerJob}</p>
          </div>
        </div>
        <div>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={` ${index < customerRating ? "text-yellow-400" : "text-gray-400"} text-[clamp(1rem,7.2cqi,1.25rem)]`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="@container flex h-full items-center">
        <p className="line-clamp-5 text-[clamp(0.75rem,4cqi,0.94rem)] text-balance">
          {customerReview}
        </p>
      </div>
    </div>
  );
}

export default CustomerCard;
