import { SearchDataType } from "@/types/AnimeTypes";
import axios from "./axios";

const searchAnimeData = async (searchQuery: string) => {
  const response = await axios.get<SearchDataType>(
    `/meta/anilist/${searchQuery}`
  );

  return response.data;
};

export default searchAnimeData;
