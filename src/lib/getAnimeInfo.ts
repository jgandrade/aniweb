import { AxiosResponse } from "axios";
import axios from "./axios";
import { AnimeInfoType } from "@/types/AnimeTypes";

const getAnimeInfo = async (
  animeId: string
): Promise<AxiosResponse<AnimeInfoType>> => {
  const response = await axios.get<AnimeInfoType>(
    `/meta/anilist/info/${animeId}`
  );

  return response;
};

export default getAnimeInfo;
