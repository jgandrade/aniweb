import { AxiosResponse } from "axios";
import axios from "./axios";
import { AnimeInfoType } from "@/types/AnimeTypes";

const getRandomAnime = async (): Promise<AxiosResponse<AnimeInfoType>> => {
  const response = await axios.get<AnimeInfoType>(
    `/meta/anilist/info/random-anime`
  );

  return response;
};

export default getRandomAnime;
