import { AxiosResponse } from "axios";
import axios from "./axios";
import { WatchInfoType } from "@/types/AnimeTypes";

const getWatchInfo = async (
  episodeId: string
): Promise<AxiosResponse<WatchInfoType>> => {
  const response = await axios.get<WatchInfoType>(
    `/meta/anilist/watch/${episodeId}`
  );

  return response;
};

export default getWatchInfo;
