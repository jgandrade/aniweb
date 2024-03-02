import { useQuery } from "@tanstack/react-query";
import getWatchInfo from "@/lib/getWatchInfo";

const useWatch = (episodeId: string) => {
  return useQuery({
    queryKey: [episodeId],
    queryFn: () => getWatchInfo(episodeId),
  });
};

export default useWatch;
