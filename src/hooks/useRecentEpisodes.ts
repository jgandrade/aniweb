import { useQuery } from "@tanstack/react-query";
import getRecentEpisodes from "@/lib/getRecentEpisodes";

const useRecentEpisodes = () => {
  return useQuery({
    queryKey: ["recent-episodes"],
    queryFn: getRecentEpisodes,
  });
};

export default useRecentEpisodes;
