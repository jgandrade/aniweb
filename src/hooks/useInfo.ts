import { useQuery } from "@tanstack/react-query";
import getAnimeInfo from "@/lib/getAnimeInfo";

const useInfo = (animeId: string) => {
  return useQuery({
    queryKey: ["animeInfo"],
    queryFn: () => getAnimeInfo(animeId),
  });
};

export default useInfo;
