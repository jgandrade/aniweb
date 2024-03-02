import fetchApi from "./fetchApi";
import { AnimeInfoType } from "@/types/AnimeTypes";

const getAnimeInfo = async (animeId: string) => {
  const response = await fetchApi(`/meta/anilist/info/${animeId}`, "get");
  return response as AnimeInfoType;
};

export default getAnimeInfo;
