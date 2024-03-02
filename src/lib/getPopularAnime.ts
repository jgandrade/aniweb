import fetchApi from "./fetchApi";
import { PopularTrendingType } from "@/types/AnimeTypes";

const getPopularAnime = async () => {
  const response = await fetchApi(`/meta/anilist/popular`, "get");
  return response as PopularTrendingType;
};

export default getPopularAnime;
