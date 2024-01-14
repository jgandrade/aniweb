import { AxiosResponse } from "axios";
import axios from "./axios";
import { RecentEpisodesType } from "@/types/AnimeTypes";

const getRecentEpisodes = async (): Promise<AxiosResponse<RecentEpisodesType>> => {
  const response = await axios.get<RecentEpisodesType>(
    `/meta/anilist/recent-episodes`
  );

  return response;
};

export default getRecentEpisodes;
