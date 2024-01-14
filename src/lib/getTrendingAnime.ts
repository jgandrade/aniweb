import { AxiosResponse } from "axios";
import axios from "./axios";
import { PopularTrendingType } from "@/types/AnimeTypes";

const getTrendingAnime = async (): Promise<
  AxiosResponse<PopularTrendingType>
> => {
  const response = await axios.get<PopularTrendingType>(
    `/meta/anilist/trending`
  );

  return response;
};

export default getTrendingAnime;
