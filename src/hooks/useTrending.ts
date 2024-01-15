import { useQuery } from "@tanstack/react-query";
import getTrendingAnime from "@/lib/getTrendingAnime";

const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingAnime,
  });
};

export default useTrending;
