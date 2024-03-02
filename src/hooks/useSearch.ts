import { useQuery } from "@tanstack/react-query";
import searchAnimeData from "@/lib/searchAnimeData";

const useSearch = (searchQuery: string) => {
  return useQuery({
    queryKey: ["search"],
    queryFn: () => searchAnimeData(searchQuery),
  });
};

export default useSearch;
