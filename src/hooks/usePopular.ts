import { useQuery } from "@tanstack/react-query";
import getPopularAnime from "@/lib/getPopularAnime";

const usePopular = () => {
  return useQuery({
    queryKey: ["popular"],
    queryFn: getPopularAnime,
  });
};

export default usePopular;
