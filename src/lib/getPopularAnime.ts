import { AxiosResponse } from "axios";
import axios from "./axios";
import { PopularTrendingType } from "@/types/AnimeTypes";

const getPopularAnime = async (): Promise<AxiosResponse<PopularTrendingType>> => {
  const response = await axios.get<PopularTrendingType>(
    `/meta/anilist/popular`
  );

  return response;
};

export default getPopularAnime;
