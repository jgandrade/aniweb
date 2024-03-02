import Hydrate from "@/util/Hydrate";
import searchAnimeData from "@/lib/searchAnimeData";
import { getQueryClient } from "@/util/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import Search from "./Search";

const SearchPageWrapper = async ({ searchQuery }: { searchQuery: string }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["search"],
    queryFn: () => searchAnimeData(searchQuery),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Search searchQuery={searchQuery} />
    </Hydrate>
  );
};

export default SearchPageWrapper;
