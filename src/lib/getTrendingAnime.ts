import fetchApi from "./fetchApi";
import { PopularTrendingType } from "@/types/AnimeTypes";

const getTrendingAnime = async () => {
  const response = await fetchApi(`/meta/anilist/trending`, "get");
  return response as PopularTrendingType;
};

export default getTrendingAnime;
