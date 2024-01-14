import { AxiosResponse } from "axios";
import axios from "./axios";
import { SearchDataType } from "@/types/AnimeTypes";

const searchAnimeData = async (
  searchQuery: string
): Promise<AxiosResponse<SearchDataType>> => {
  const response = await axios.get<SearchDataType>(
    `/meta/anilist/${searchQuery}`
  );

  return response;
};

export default searchAnimeData;
