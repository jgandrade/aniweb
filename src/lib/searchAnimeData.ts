import { SearchDataType } from "@/types/AnimeTypes";
import fetchApi from "./fetchApi";

const searchAnimeData = async (searchQuery: string) => {
  const response = await fetchApi(`/meta/anilist/${searchQuery}`, "get");
  return response as SearchDataType;
};

export default searchAnimeData;
