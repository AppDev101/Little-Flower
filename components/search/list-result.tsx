import { searchAction } from "@/lib/utils/search";

async function ListResult({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const { search } = await searchParams;

  const results = await searchAction(search);

  return (
    <ul>
      {results.map((item, index) => (
        <li key={index} className="mt-2 text-white">
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
}

export default ListResult;
